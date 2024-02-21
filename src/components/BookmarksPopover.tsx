import { useBookmarkContext } from "../libs/hooks";
import JobList from "./JobList";

export default function BookmarksPopover() {
  const {BookmarkedItemList, isLoading} =useBookmarkContext()
  return <div className="bookmarks-popover">
    <JobList jobItemsList={BookmarkedItemList} isLoading={isLoading}/>
  </div>;
}
