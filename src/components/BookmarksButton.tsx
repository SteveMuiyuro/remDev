import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import BookmarksPopover from "./BookmarksPopover";

export default function BookmarksButton() {

  const [isOpen, setIsOPen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{

    const handleClick = (e:MouseEvent) => {

      if(e.target instanceof HTMLElement && !buttonRef.current?.contains(e.target) && !divRef.current?.contains(e.target)) {
        setIsOPen(false)
      }

    }

    document.addEventListener("click", handleClick)

    return () => document.removeEventListener("click", handleClick)

  }, [])

  return (
    <section>
      <button  ref={buttonRef}onClick={()=> setIsOPen(prev => !prev)}className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={divRef}/>}
    </section>
  );
}
