import { sortBy } from "../libs/types";

type SortingControlsProps = {
  onClick:(sorted:sortBy)=> void,
  sortBy:sortBy
}

export default function SortingControls({onClick, sortBy}:SortingControlsProps) {

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

    <SortingButton onClick={()=> onClick("relevant")} isActive ={sortBy === "relevant"}>Relevent</SortingButton>
    <SortingButton onClick={()=> onClick("recent")} isActive ={sortBy === "recent"}>Recent</SortingButton>
    </section>
  );
}

type SortingButtonProps ={
  onClick: ()=> void;
  isActive:boolean,
  children:React.ReactNode
}

function SortingButton({onClick,isActive, children}:SortingButtonProps){
  return(
    <button onClick={onClick}className={`sorting__button sorting__button--recent ${isActive && "sorting__button--active"}`}>
    {children}
  </button>
  )
  }
