import { useActiveIdContext } from "../libs/hooks";
import { TjobItem } from "../libs/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type Tprops = {
  jobItemsList: TjobItem[]
  isLoading:boolean
 }
export function JobList({jobItemsList, isLoading}:Tprops) {
  const {activeID} = useActiveIdContext()
  return <ul className="job-list">
    {isLoading && <Spinner/>}
    {!isLoading && jobItemsList.map(jobItem => <JobListItem key={jobItem.id} jobItem ={jobItem} isActive={jobItem.id === activeID}/>)}
  </ul>;
}

export default JobList;
