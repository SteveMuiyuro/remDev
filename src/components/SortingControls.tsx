import { useJobItemContext } from "../libs/hooks";



export default function SortingControls() {

  const {sortBy, handleSortBy:onClick} = useJobItemContext()

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
