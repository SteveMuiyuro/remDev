import { TriangleDownIcon } from "@radix-ui/react-icons";
import {useRef, useState } from "react";
import BookmarksPopover from "./BookmarksPopover";
import { useOnClickOutside } from "../libs/hooks";

export default function BookmarksButton() {

  const [isOpen, setIsOPen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
useOnClickOutside([buttonRef, divRef], ()=> setIsOPen(false))

  return (
    <section>
      <button  ref={buttonRef}onClick={()=> setIsOPen(prev => !prev)}className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={divRef}/>}
    </section>
  );
}
