import { useEffect, useState } from "react";
import { TjobItem, jobItemProps } from "./types";
import { BASE_URL } from "./const";
import { useQuery } from "@tanstack/react-query";


export function useJobItem(id:number | null) {

  type jobItemAPIResponse ={
    public:boolean,
    jobItem: jobItemProps
  }

  const fetchJobItem = async (id:number):Promise<jobItemAPIResponse>=>{

      const res = await fetch(`${BASE_URL}/${id}`)
      const data = await res.json()
      return data;
  }

 const {data, isLoading} = useQuery(["job-item", id],
 () => id ?  fetchJobItem(id) : null,

 {
  staleTime: 1000*60*60,
  refetchOnWindowFocus:false,
  retry:false,
  enabled:Boolean(id),
  onError:()=>{}
 }

 )
 const jobItem = data?.jobItem

 return {jobItem, isLoading}

}


export function useFetchItems(text:string){

    const [jobItemsList, setJobItemsList] = useState<TjobItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const count = jobItemsList.length
    const jobItemsSliced = jobItemsList.slice(0, 7);

  useEffect(()=> {
    if(!text) return;
    const fetchItems = async()=> {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}?search=${text}`)
      const data = await res.json();
      setIsLoading(false)
      setJobItemsList(data.jobItems)

    }

    fetchItems()
  },[text])


  return {
    jobItemsSliced,
    isLoading,
    count
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
