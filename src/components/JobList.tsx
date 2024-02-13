import JobListItem from "./JobListItem";

type TjobItem = {
  badgeLetters: string,
  company: string,
  daysAgo: number,
  id: number,
  relevanceSCore:number,
  title:string
 }

 type Tprops = {
  jobItemList: TjobItem[]
 }
export function JobList({jobItemsList}:Tprops) {
  return <ul className="job-list">
    {jobItemsList?.map(jobItem => <JobListItem jobItem ={jobItem}/>)}
  </ul>;
}

export default JobList;
