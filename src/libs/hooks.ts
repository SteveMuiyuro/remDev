import { useContext, useEffect, useState } from "react";
import { TjobItem, jobItemProps } from "./types";
import { BASE_URL } from "./const";
import { useQuery } from "@tanstack/react-query";
import { displayError } from "./utils";
import { BookMarkContext } from "../contexts/BookmarkContextProvider";


export function useJobItem(id:number | null) {

  type jobItemAPIResponse ={
    public:boolean,
    jobItem: jobItemProps
  }

  const fetchJobItem = async (id:number):Promise<jobItemAPIResponse>=>{

      const res = await fetch(`${BASE_URL}/${id}`)
      if(!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData)
      }

      const data = await res.json()
      return data;
  }

 const {data, isInitialLoading:isLoading} = useQuery(["job-item", id],
 () => id ?  fetchJobItem(id) : null,

 {
  staleTime: 1000*60*60,
  refetchOnWindowFocus:false,
  retry:false,
  enabled:Boolean(id),
  onError:displayError
 }

 )
 const jobItem = data?.jobItem

 return {jobItem, isLoading}

}




export function useFetchItems(text:string){

  type jobItemsAPIResponse = {
    public:boolean,
    sorted:boolean,
    jobItems:TjobItem[]
  }

  const fetchJobItems = async(text:string): Promise<jobItemsAPIResponse> =>{
    const res = await fetch(`${BASE_URL}?search=${text}`)
    if(!res.ok) {
      const errorData = await res.json()
      throw new Error(errorData.description)
    }
    const data = await res.json();
    return data;

  }

  const {data, isInitialLoading} = useQuery(["job-items", text],
  ()=>fetchJobItems(text),
  {
    staleTime: 1000*60*60,
    refetchOnWindowFocus:false,
    retry:false,
    enabled:Boolean(text),
    onError:displayError
   }

  )
  return {
    jobItemsList:data?.jobItems,
    isLoading:isInitialLoading

   } as const;
}




export function useActiveID(){
  const [activeID, setActiveID] = useState<number | null>(null)

  useEffect(()=>{
    const handleHashChange = () => {
    const ID = +window.location.hash.slice(1);
     setActiveID(ID)
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return ()=>{
      window.removeEventListener("hashchange", handleHashChange)
    }
  })

  return activeID;

}

export function useDebounce<T>(value :T, delay=500):T {

  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
     const timeoutID = setTimeout(()=> {
       setDebounceValue(value)

    }, delay)

    return () =>clearTimeout(timeoutID)
  }, [value, delay])

  return debounceValue;

}


export function useLocalStorage<T>(key:string, intitialValue:T):[T, React.Dispatch<React.SetStateAction<T>>]{
  const [value, setValue] = useState(
    ()=> JSON.parse(localStorage.getItem(key) || JSON.stringify(intitialValue))
    )
    useEffect(()=> {
      localStorage.setItem(key, JSON.stringify(value))
      },[value, key])

return [value, setValue];
}

export function useBookmarkContext(){
  const context = useContext(BookMarkContext)

  if(!context){
    throw new Error("Please ensure that the component is within the context provider")
  }

  return context
}
