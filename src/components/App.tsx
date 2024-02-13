import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

function App() {



  const [searchText, setSearchText] = useState("");
  const [jobItemsList, setJobItemsList] = useState([])

useEffect(()=> {
  const fetchItems = async()=> {
    if(!searchText) return;

    const res = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`)
    const data = await res.json();
    setJobItemsList(data.jobItems)
  }

  fetchItems()
},[searchText])


  return(
   <>
    <Background/>
    <Header searchText={searchText} setSearchText={setSearchText}/>
    <Container jobItemsList={jobItemsList}/>
    <Footer/>
   </>
  )
}

export default App;
