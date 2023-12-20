import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { useContext } from "react";
import {AppContext} from "../context/AppContext";

function PageLayOut() {
    const {fetchBlogPost} = useContext(AppContext);
useEffect(()=>{
  fetchBlogPost();
},[])
    return ( <div>
              <Header/>
              <Blogs/>
              <Pagination/>
    </div> );
}

export default PageLayOut;