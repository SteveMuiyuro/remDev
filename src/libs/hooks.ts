import { useEffect, useState } from "react";
import { TjobItem } from "./types";


export default function useFetchItems(text:string){

    const [jobItemsList, setJobItemsList] = useState<TjobItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const jobItemsSliced = jobItemsList.slice(0, 7);

  useEffect(()=> {
    if(!text) return;
    const fetchItems = async()=> {
      setIsLoading(true);
      const res = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${text}`)
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
