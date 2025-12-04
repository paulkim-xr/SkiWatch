"use client";

import { RefObject, useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & {
  once?: boolean;
};

export function useInViewport<T extends Element>(options?: Options): {
  ref: RefObject<T>;
  inView: boolean;
} {
  const targetRef = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const { root = null, rootMargin = "0px", threshold = 0.1, once = false } = options ?? {};

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return { ref: targetRef, inView };
}
