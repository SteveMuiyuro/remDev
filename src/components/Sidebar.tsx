import { TjobItem } from "../libs/types";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SidebarProps = {
  jobItemsList: TjobItem[],
  isLoading:boolean,
  count:number
}

export default function Sidebar({jobItemsList, isLoading, count}:SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount count={count}/>
        <SortingControls/>
      </div>
     <JobList jobItemsList={jobItemsList} isLoading={isLoading}/>
     <PaginationControls/>
    </div>
  );
}
