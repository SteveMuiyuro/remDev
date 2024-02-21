import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "../libs/hooks";

type BookMarkIconProps ={
  id:number
}

export default function BookmarkIcon({id}:BookMarkIconProps) {
  const {Bookmarkedids, handleToggledBookmarks} =  useBookmarkContext()

  return (
    <button onClick={(e) => {
      handleToggledBookmarks(id)
      e.preventDefault()
      // e.stopPropagation()

      }}className="bookmark-btn">
      <BookmarkFilledIcon className={`${Bookmarkedids.includes(id) ? "filled" : ""}`} />
    </button>
  );
}
