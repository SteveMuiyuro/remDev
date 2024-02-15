import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SidebarTop from "./SidebarTop";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import { useState } from "react";
import { useFetchItems} from "../libs/hooks";


function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, isLoading] = useFetchItems(searchText);


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
