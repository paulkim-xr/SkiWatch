import SlopeTable from "./ui/SlopeTable";
import { resorts } from "./data/data";

function Slopes() {

  return (
    <div>
        <SlopeTable resorts={resorts}/>
    </div>
  );
}

export default Slopes;
