import { sortBy } from "../libs/types";

type SortingControlsProps = {
  onClick:(sorted:sortBy)=> void,
  sortBy:sortBy
}

export default function SortingControls({onClick, sortBy}:SortingControlsProps) {

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

    <SortingButton onClick={()=> onClick("relevant")} isActive ={sortBy === "relevant"}/>
    <SortingButton onClick={()=> onClick("recent")} isActive ={sortBy === "recent"}/>
    </section>
  );
}

type SortingButtonProps ={
  onClick: ()=> void;
  isActive:boolean
}

function SortingButton({onClick,isActive}:SortingButtonProps){
  return(
    <button onClick={onClick}className={`sorting__button sorting__button--recent ${isActive && "sorting__button--active"}`}>
    Recent
  </button>
  )
  }
