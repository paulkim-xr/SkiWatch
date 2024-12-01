import { useEffect, useRef, useState } from "react";
import { ResortStreams, Stream, StreamType } from "../data/data";
import "./Sidebar.css";

function Sidebar({ data, onStreamSelect }: { data: ResortStreams[], onStreamSelect: (stream: Stream) => void }) {
  const [current, setCurrent] = useState<ResortStreams | undefined>();
  const [selectedStream, setSelectedStream] = useState<Stream | undefined>();
  const listRefs = useRef<{ [key: string]: HTMLUListElement | null }>({});

  function resortSelected(name: String) {
    if (current?.name === name) {
      setCurrent(undefined);
      return;
    }
    setCurrent(data.find((res) => res.name === name));
  }

  useEffect(() => {
    Object.keys(listRefs.current).forEach((key) => {
      const element = listRefs.current[key];
      if (element) {
        element.style.height = key === current?.name ? `${element.scrollHeight}px` : "0px";
      }
    });
  }, [current]);

  return (
    <div className="sidebar bg-white shadow-lg">
      <ul className="resort-list p-4">
        {data.map((resort) => (
          <li className={`${(resort.name === current?.name ? "selected" : "")} mb-2`} key={resort.name}>
            <button className="flex justify-between p-1 pr-3 w-full text-left font-bold text-gray-700" onClick={() => resortSelected(resort.name)}>
              {resort.name}
              <span>{resort.name === current?.name ? "▲" : "▼"}</span>
            </button>
            <ul 
              ref={(el) => listRefs.current[resort.name] = el}
              className={`${resort.name === current?.name ? "expanded" : "collapsed"} cam-list pl-4`}
            >
              {resort.streams.map((stream) => (
                <li className={`${(selectedStream?.name === stream.name ? "selected" : "")}`} key={stream.name}>
                  <button 
                    className="flex justify-between w-full px-2 py-1" disabled={stream.type === StreamType.Unavailable}
                    onClick={() => {
                      onStreamSelect(stream);
                      setSelectedStream(stream);
                    }}
                  >
                    {stream.name}                  
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Sidebar;