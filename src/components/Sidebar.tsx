import { TjobItem, sortBy } from "../libs/types";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SidebarProps = {
  jobItemsList: TjobItem[],
  isLoading:boolean,
  count:number
  handlePageChange:(direction:"previous" | "next") => void,
  currentPage:number,
  totalPages:number,
  handleSortBy:(sorted:sortBy)=> void;
  sortBy:sortBy
}

export default function Sidebar({jobItemsList, isLoading, count, handlePageChange, currentPage, totalPages, handleSortBy, sortBy}:SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount count={count}/>
        <SortingControls onClick={handleSortBy} sortBy={sortBy}/>
      </div>
     <JobList jobItemsList={jobItemsList} isLoading={isLoading}/>
     <PaginationControls onClick={handlePageChange} currentPage={currentPage} totalPages={totalPages}/>
    </div>
  );
}
