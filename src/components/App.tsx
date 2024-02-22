import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SidebarTop from "./SidebarTop";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import { Toaster } from "react-hot-toast";



function App() {

  return(
   <>
    <Background/>
    <Header>
      <SidebarTop />
      <SearchForm />
    </Header>
    <Container>
      <Sidebar
      />
      <JobItemContent/>
    </Container>
    <Footer/>
    <Toaster position="top-right"/>
   </>
  )
}

export default App;
