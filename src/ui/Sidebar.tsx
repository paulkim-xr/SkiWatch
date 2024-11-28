import { useState } from "react";
import { ResortStreams, Stream } from "../data/data";

function Sidebar({ data, onStreamSelect }: { data: ResortStreams[], onStreamSelect: (stream: Stream) => void }) {
  const [resortList] = useState<string[]>(data.map((resort) => resort.name));
  const [current, setCurrent] = useState<ResortStreams | undefined>();

  function resortSelected(name: String) {
    setCurrent(data.find((res) => res.name === name));
  }

  return (
    <div className="sidebar">
      <ul>
        {resortList.map((resortName) => (
          <li key={resortName} onClick={() => resortSelected(resortName)}>
            {resortName}
          </li>
        ))}
      </ul>
      <ul>
        {data.find((res) => res === current)?.streams.map((stream) => (
          <li key={stream.name} onClick={() => onStreamSelect(stream)}>
            {stream.name}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Sidebar;