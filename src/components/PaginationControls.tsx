import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
type PaginationControlsProps ={
  currentPage:number,
  onClick:(direction: "previous"| "next") => void;
  totalPages:number

}

export default function PaginationControls({currentPage, onClick, totalPages}:PaginationControlsProps) {

  return   <section className="pagination">
    {currentPage > 1 &&
    <PaginationButton
    currentPage={currentPage}
    direction="previous"
    onClick={()=> onClick("previous")}
     />
    }
    {currentPage < totalPages &&
          <PaginationButton
          currentPage={currentPage}
          direction="next"
          onClick={()=> onClick("next")}/>
    }
  </section>;
}


  type PaginationButtonProps = {
    currentPage:number;
    direction:"previous" | "next",
    onClick:()=> void
  }
function PaginationButton({currentPage, direction, onClick}:PaginationButtonProps){

  return(
    <button onClick={onClick}className={`pagination__button pagination__button--${direction}`}>

      {direction === "previous" &&
        <>
          <ArrowLeftIcon/>
          Page {currentPage - 1}
        </>
      }

      {direction === "next" &&
          <>
          <ArrowRightIcon/>
          Page {currentPage + 1}
        </>
      }
      </button>

  )
}
