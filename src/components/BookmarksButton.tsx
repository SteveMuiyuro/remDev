import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import BookmarksPopover from "./BookmarksPopover";

export default function BookmarksButton() {

  const [isOpen, setIsOPen] = useState(false);

  return (
    <section>
      <button onClick={()=> setIsOPen(prev => !prev)}className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover/>}
    </section>
  );
}

