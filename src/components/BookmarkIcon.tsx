import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { BookMarkContext } from "../contexts/BookmarkContextProvider";

type BookMarkIconProps ={
  id:number
}

export default function BookmarkIcon({id}:BookMarkIconProps) {
  const {Boomarkedids, handleToggledBookmarks} =  useContext(BookMarkContext)

  return (
    <button onClick={(e) => {
      handleToggledBookmarks(id)
      e.preventDefault()
      // e.stopPropagation()

      }}className="bookmark-btn">
      <BookmarkFilledIcon className={`${Boomarkedids.includes(id) ? "filled" : ""}`} />
    </button>
  );
}
