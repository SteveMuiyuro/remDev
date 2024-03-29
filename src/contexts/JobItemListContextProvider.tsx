import { createContext, useCallback, useMemo, useState } from "react"
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
    const jobItemsSorted = useMemo(() => [...jobItemsList || []].sort((a, b) => {
      if(sortBy === "relevant") {
        return b.relevanceScore - a.relevanceScore;
      }
        return a.daysAgo - b.daysAgo;

    }), [jobItemsList, sortBy])

    const jobItemsSliced = useMemo(() => jobItemsSorted?.slice(currentPage * PAGE_SIZE - PAGE_SIZE,currentPage * PAGE_SIZE), [currentPage, jobItemsSorted]);



    const totalPages = count / PAGE_SIZE;

    const handlePageChange = useCallback((direction:PageDirection) => {
      if(direction === "previous") {
        setCurrentPage(prev => prev - 1)
      } else {
        setCurrentPage(prev => prev + 1)
      }
    }, [])

    const handleSortBy = useCallback((sorted:sortBy)=>{
      setCurrentPage(1)
      setSortBy(sorted)
    }, [])


    const contextVariables =  useMemo(()=> ({
      handleSortBy,
      handlePageChange,
      totalPages,
      jobItemsSliced,
      count,
      sortBy,
      currentPage,
      isLoading
    }), [handleSortBy,
      handlePageChange,
      totalPages,
      jobItemsSliced,
      count,
      sortBy,
      currentPage,
      isLoading])


    return (
      <JobItemListContext.Provider value={
        contextVariables
      }>{children}</JobItemListContext.Provider>
    )
  }
