import { createContext, useCallback, useMemo} from "react"
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

const handleToggledBookmarks = useCallback((id:number)=>{
    if(Bookmarkedids.includes(id)) {
        setBookMarkIds(prev => prev.filter(item => item !== id))
    }

    else{
        setBookMarkIds(prev => [...prev, id])
    }

}, [Bookmarkedids, setBookMarkIds])

const contextVariables = useMemo(() => ({
      Bookmarkedids,
      handleToggledBookmarks,
      BookmarkedItemList,
      isLoading
}), [Bookmarkedids,
  handleToggledBookmarks,
  BookmarkedItemList,
  isLoading])


  return (
    <BookMarkContext.Provider value={contextVariables}>{children}</BookMarkContext.Provider>
  )
}
