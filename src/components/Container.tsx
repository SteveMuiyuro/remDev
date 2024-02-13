import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({jobItemsList}) {
  return <div className="container">
    <Sidebar jobItemsList={jobItemsList}/>
    <JobItemContent/>
  </div>;
}
