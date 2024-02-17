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
  onError:(error)=>{
    console.log(error)
  }
 }

 )
 const jobItem = data?.jobItem

 return {jobItem, isLoading}

}


// export function useFetchItems(text:string){

//     const [jobItemsList, setJobItemsList] = useState<TjobItem[]>([]);
//     const [isLoading, setIsLoading] = useState(false);


//   useEffect(()=> {
//     if(!text) return;
//     const fetchItems = async()=> {
//       setIsLoading(true);
//       const res = await fetch(`${BASE_URL}?search=${text}`)
//       const data = await res.json();
//       setIsLoading(false)
//       setJobItemsList(data.jobItems)

//     }

//     fetchItems()
//   },[text])


//   return {
//     jobItemsList,
//     isLoading,

//    } as const;
// }

export function useFetchItems(text:string){

  type jobItemsAPIResponse = {
    public:boolean,
    sorted:boolean,
    jobItems:TjobItem[]
  }

  const fetchJobItems = async(text:string): Promise<jobItemsAPIResponse> =>{
    const res = await fetch(`${BASE_URL}?search=${text}`)
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
    onError:(error)=>{
      console.log(error)
    }
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
