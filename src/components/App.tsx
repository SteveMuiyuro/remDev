import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SidebarTop from "./SidebarTop";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import useFetchItems from "../libs/hooks";
import { useEffect, useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, isLoading] = useFetchItems(searchText);
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

  return(
   <>
    <Background/>
    <Header>
      <SidebarTop />
      <SearchForm setSearchText={setSearchText} searchText={searchText}/>
    </Header>
    <Container>
      <Sidebar jobItemsList={jobItems} isLoading = {isLoading}/>
      <JobItemContent/>
    </Container>
    <Footer/>
   </>
  )
}

export default App;
