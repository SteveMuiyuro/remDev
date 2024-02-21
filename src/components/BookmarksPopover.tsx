import { forwardRef } from "react";
import { useBookmarkContext } from "../libs/hooks";
import JobList from "./JobList";

const BookmarksPopover = forwardRef<HTMLDivElement>(function(_,ref) {
  const {BookmarkedItemList, isLoading} =useBookmarkContext()
  return <div ref={ref}className="bookmarks-popover">
    <JobList jobItemsList={BookmarkedItemList} isLoading={isLoading}/>
  </div>;
})

export default BookmarksPopover
