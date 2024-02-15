import { useEffect, useState } from "react";
import { TjobItem, jobItemProps } from "./types";
import { BASE_URL } from "./const";


export function useFetchItems(text:string){

    const [jobItemsList, setJobItemsList] = useState<TjobItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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


  return [
    jobItemsSliced,
    isLoading
  ] as const;
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


export function useJobItem(id:number | null) {
 const [jobItem, setJobItem] =useState<jobItemProps | null>(null)

  useEffect(()=> {
    const fetchJobItem = async ()=> {
      if(!id) return;
      const res = await fetch(`${BASE_URL}/${id}`)
      const data = await res.json()
      setJobItem(data.jobItem)
    }
    fetchJobItem()
  }, [id])

 return jobItem;
}
