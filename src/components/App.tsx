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
import { Toaster } from "react-hot-toast";


function App() {
  const [searchText, setSearchText] = useState("");
  const debounceSearchText = useDebounce(searchText, 500);
  const {jobItemsList, isLoading} = useFetchItems(debounceSearchText);
  const count = jobItemsList?.length || 0
  const jobItemsSliced = jobItemsList?.slice(0, 7) || [];

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
    <Toaster position="top-right"/>
   </>
  )
}

export default App;
