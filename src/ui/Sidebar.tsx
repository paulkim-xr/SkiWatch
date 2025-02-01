import { useEffect, useRef, useState } from "react";
import { Resort, Stream, StreamType } from "../data/Util";
import "./Sidebar.css";

function Sidebar({ data, onStreamSelect }: { data: Resort[], onStreamSelect: (stream: Stream) => void }) {
  const [currentResort, setCurrentResort] = useState<Resort | undefined>();
  const [selectedStream, setSelectedStream] = useState<Stream | undefined>();
  const listRefs = useRef<{ [key: string]: HTMLUListElement | null }>({});

  function resortSelected(name: String) {
    if (currentResort?.name.ko === name) {
      setCurrentResort(undefined);
      return;
    }
    setCurrentResort(data.find((res) => res.name.ko === name));
  }

  useEffect(() => {
    Object.keys(listRefs.current).forEach((key) => {
      const element = listRefs.current[key];
      if (element) {
        element.style.height = key === currentResort?.name.ko ? `${element.scrollHeight}px` : "0px";
      }
    });
  }, [currentResort]);

  return (
    <div className="sidebar bg-white shadow-lg">
      <ul className="resort-list p-4">
        {data.map((resort) => (
          <li className={`${(resort.name === currentResort?.name ? "selected" : "")} mb-2`} key={resort.name.ko}>
            <button className="flex justify-between p-1 pr-3 w-full text-left font-bold text-gray-700" onClick={() => resortSelected(resort.name.ko)}>
              {resort.name.ko}
              <span>{resort === currentResort ? "▲" : "▼"}</span>
            </button>
            <ul 
              ref={(el) => listRefs.current[resort.name.ko] = el}
              className={`${resort === currentResort ? "expanded" : "collapsed"} cam-list pl-4`}
            >
              <li className="bg-cyan-300">
                <button
                  className="flex justify-between w-full px-2 py-1 text-left"
                  onClick={() => {
                    window.open(resort.weather, '_blank', 'noopener noreferrer');
                  }}
                >
                  날씨
                </button>
              </li>
              {resort.streams.map((stream) => (
                <li className={`${(selectedStream === stream ? "selected" : "")}`} key={stream.name.ko}>
                  <button 
                    className="flex justify-between w-full px-2 py-1 text-left" disabled={stream.type === StreamType.Unavailable}
                    onClick={() => {
                      if (stream.type === StreamType.External) {
                        window.open(stream.url, '_blank', 'noopener noreferrer');
                        return;
                      }
                      onStreamSelect(stream);
                      setSelectedStream(stream);
                    }}
                  >
                    {stream.name.ko}
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