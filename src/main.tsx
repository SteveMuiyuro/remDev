import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarkContextProvider from "./contexts/BookmarkContextProvider.tsx";
import ActiveIdContextProvider from "./contexts/ActiveIdContextProvider.tsx";
import SearchContextProvider from "./contexts/SearchContextProvider.tsx";
import JobItemListContextProvider from "./contexts/JobItemListContextProvider.tsx";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    <QueryClientProvider client ={queryClient}>
      <BookmarkContextProvider>
        <ActiveIdContextProvider>
          <SearchContextProvider>
           <JobItemListContextProvider>
               <App />
            </JobItemListContextProvider>
          </SearchContextProvider>
        </ActiveIdContextProvider>
      </BookmarkContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
