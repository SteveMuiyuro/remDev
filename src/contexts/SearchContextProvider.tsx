import { createContext, useMemo, useState } from "react"
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

    const contextVariables = useMemo(() => ({
           searchText,
           setSearchText,
           debounceSearchText
    }), [
      searchText,
      setSearchText,
      debounceSearchText])

    return (
      <SearchContext.Provider value={
        contextVariables
     }>{children}</SearchContext.Provider>
    )
  }
