import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../libs/hooks"


type BookMarkContextProps = {
  Boomarkedids: number[],
  handleToggledBookmarks:(id:number)=> void

}
export const BookMarkContext = createContext<BookMarkContextProps| null>(null)

type BookmarkContextProviderProps ={
    children:React.ReactNode
}

export default function BookmarkContextProvider({children}:BookmarkContextProviderProps) {

const [Boomarkedids, setBookMarkIds] = useLocalStorage<number[]>("Bookmarkids", [])


const handleToggledBookmarks = (id:number)=>{
    if(Boomarkedids.includes(id)) {
        setBookMarkIds(prev => prev.filter(item => item !== id))
    }

    else{
        setBookMarkIds(prev => [...prev, id])
    }

}


  return (
    <BookMarkContext.Provider value={{ Boomarkedids, handleToggledBookmarks}}>{children}</BookMarkContext.Provider>
  )
}
