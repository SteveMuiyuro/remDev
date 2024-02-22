import { createContext, useState } from "react"
import {  useSearchContext, useSearchQuery } from "../libs/hooks"
import { PAGE_SIZE } from "../libs/const";
import { PageDirection, TjobItem, sortBy } from "../libs/types";

type JobItemListContextProps = {
    count:number;
    handlePageChange:(direction:PageDirection) => void;
    currentPage:number;
    totalPages:number;
    handleSortBy:(sorted:sortBy)=> void;
    sortBy:sortBy;
    jobItemsSliced:TjobItem[];
    isLoading: boolean

  }
  export const JobItemListContext = createContext<JobItemListContextProps | null>(null)


  type JobItemListContextProviderProps ={
      children:React.ReactNode
  }

  export default function JobItemListContextProvider({children}:JobItemListContextProviderProps) {

    const {debounceSearchText} = useSearchContext()

    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState<sortBy>("relevant")
    const {jobItemsList, isLoading} = useSearchQuery(debounceSearchText);

    const count = jobItemsList?.length || 0
    const jobItemsSorted = [...jobItemsList || []].sort((a, b) => {
      if(sortBy === "relevant") {
        return b.relevanceScore - a.relevanceScore;
      }
        return a.daysAgo - b.daysAgo;

    })

    const jobItemsSliced = jobItemsSorted?.slice(currentPage * PAGE_SIZE - PAGE_SIZE,currentPage * PAGE_SIZE);



    const totalPages = count / PAGE_SIZE;

    const handlePageChange = (direction:PageDirection) => {
      if(direction === "previous") {
        setCurrentPage(prev => prev - 1)
      } else {jobItemsSliced
        setCurrentPage(prev => prev + 1)
      }
    }

    const handleSortBy = (sorted:sortBy)=>{
      setCurrentPage(1)
      setSortBy(sorted)
    }



    return (
      <JobItemListContext.Provider value={
        {
            handleSortBy,
            handlePageChange,
            totalPages,
            jobItemsSliced,
            count,
            sortBy,
            currentPage,
            isLoading
        }
      }>{children}</JobItemListContext.Provider>
    )
  }
