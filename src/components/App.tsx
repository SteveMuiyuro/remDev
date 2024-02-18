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
import { PAGE_SIZE } from "../libs/const";


function App() {
  const [searchText, setSearchText] = useState("");
  const debounceSearchText = useDebounce(searchText, 500);
  const {jobItemsList, isLoading} = useFetchItems(debounceSearchText);
  const [currentPage, setCurrentPage] = useState(1);

  const count = jobItemsList?.length || 0
  const jobItemsSliced = jobItemsList?.slice(currentPage * PAGE_SIZE - PAGE_SIZE,currentPage * PAGE_SIZE) || [];

  const totalPages = count/jobItemsSliced.length;

  const handlePageChange = (direction: "previous" | "next") => {
    if(direction === "previous") {
      setCurrentPage(prev => prev - 1)
    } else {jobItemsSliced
      setCurrentPage(prev => prev + 1)
    }
  }



  return(
   <>
    <Background/>
    <Header>
      <SidebarTop />
      <SearchForm setSearchText={setSearchText} searchText={searchText}/>
    </Header>
    <Container>
      <Sidebar
      jobItemsList={jobItemsSliced}
      isLoading = {isLoading}
      count={count}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      totalPages={totalPages}

      />
      <JobItemContent/>
    </Container>
    <Footer/>
    <Toaster position="top-right"/>
   </>
  )
}

export default App;
