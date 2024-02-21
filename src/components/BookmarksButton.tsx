import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import BookmarksPopover from "./BookmarksPopover";

export default function BookmarksButton() {

  const [isOpen, setIsOPen] = useState(false);

  useEffect(()=>{

    const handleClick = (e:MouseEvent) => {

      if(e.target instanceof HTMLElement && !e.target.closest(".bookmarks-btn") && !e.target.closest(".bookmarks-popover")) {
        setIsOPen(false)
      }

    }

    document.addEventListener("click", handleClick)

    return () => document.removeEventListener("click", handleClick)

  }, [])

  return (
    <section>
      <button onClick={()=> setIsOPen(prev => !prev)}className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover/>}
    </section>
  );
}
