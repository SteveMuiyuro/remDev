import { createContext} from "react"
import {  useJobItems, useLocalStorage} from "../libs/hooks"
import { jobItemProps } from "../libs/types"


type BookMarkContextProps = {
  Bookmarkedids: number[],
  handleToggledBookmarks:(id:number)=> void,
  BookmarkedItemList: jobItemProps[]
  isLoading:boolean

}
export const BookMarkContext = createContext<BookMarkContextProps| null>(null)

type BookmarkContextProviderProps ={
    children:React.ReactNode
}

export default function BookmarkContextProvider({children}:BookmarkContextProviderProps) {

const [Bookmarkedids, setBookMarkIds] = useLocalStorage<number[]>("Bookmarkids", [])
const {jobItems:BookmarkedItemList, isLoading} =
useJobItems(Bookmarkedids)

const handleToggledBookmarks = (id:number)=>{
    if(Bookmarkedids.includes(id)) {
        setBookMarkIds(prev => prev.filter(item => item !== id))
    }

    else{
        setBookMarkIds(prev => [...prev, id])
    }

}


  return (
    <BookMarkContext.Provider value={{
      Bookmarkedids,
      handleToggledBookmarks,
      BookmarkedItemList,
      isLoading
      }}>{children}</BookMarkContext.Provider>
  )
}
