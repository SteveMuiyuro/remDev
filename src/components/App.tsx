import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SidebarTop from "./SidebarTop";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import { useState } from "react";
import { useDebounce, useFetchItems} from "../libs/hooks";


function App() {
  const [searchText, setSearchText] = useState("");
  const debounceSearchText = useDebounce(searchText, 500);
  const {jobItemsSliced, isLoading, count} = useFetchItems(debounceSearchText);


  return(
   <>
    <Background/>
    <Header>
      <SidebarTop />
      <SearchForm setSearchText={setSearchText} searchText={searchText}/>
    </Header>
    <Container>
      <Sidebar jobItemsList={jobItemsSliced} isLoading = {isLoading} count={count}/>
      <JobItemContent/>
    </Container>
    <Footer/>
   </>
  )
}

export default App;
