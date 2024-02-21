import { forwardRef } from "react";
import { useBookmarkContext } from "../libs/hooks";
import JobList from "./JobList";
import { createPortal } from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>(function(_,ref) {
  const {BookmarkedItemList, isLoading} =useBookmarkContext()
  return createPortal(<div ref={ref}className="bookmarks-popover">
    <JobList jobItemsList={BookmarkedItemList} isLoading={isLoading}/>
  </div>, document.body)
})

export default BookmarksPopover
