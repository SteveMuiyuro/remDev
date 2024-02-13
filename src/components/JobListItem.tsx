import BookmarkIcon from "./BookmarkIcon";
type TjobItem = {
  badgeLetters: string,
  company: string,
  daysAgo: number,
  id: number,
  relevanceSCore:number,
  title:string
 }

 type JobListItemProps ={
  jobItem: TjobItem
 }
export default function JobListItem({jobItem}:JobListItemProps) {


  return (
    <li className="job-item">
      <a className="job-item__link">
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{jobItem.daysAgo}</time>
        </div>
      </a>
    </li>
  );
}
