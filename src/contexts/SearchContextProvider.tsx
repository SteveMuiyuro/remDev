import { createContext, useState } from "react"
import { useDebounce } from "../libs/hooks";


type SearchContextProps = {
    searchText:string,
    setSearchText:(text:string) => void;
    debounceSearchText:string

  }
  export const SearchContext = createContext<SearchContextProps| null>(null)


  type SearchContextProviserProps ={
      children:React.ReactNode
  }

  export default function SearchContextProvider({children}:SearchContextProviserProps) {
    const [searchText, setSearchText] = useState("");
    const debounceSearchText = useDebounce(searchText, 500);
    
    return (
      <SearchContext.Provider value={{
        searchText,
        setSearchText,
        debounceSearchText
        }}>{children}</SearchContext.Provider>
    )
  }
