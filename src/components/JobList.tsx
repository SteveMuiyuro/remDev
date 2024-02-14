import { TjobItem } from "../libs/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type Tprops = {
  jobItemsList: TjobItem[]
  isLoading:boolean
 }
export function JobList({jobItemsList, isLoading}:Tprops) {
  return <ul className="job-list">
    {isLoading && <Spinner/>}
    {!isLoading && jobItemsList.map(jobItem => <JobListItem key={jobItem.id} jobItem ={jobItem}/>)}
  </ul>;
}

export default JobList;
