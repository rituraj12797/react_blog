import { createContext, useState } from "react";
import url from "../baseurl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [posts, setPosts] = useState([]);
  
  async function fetchBlogPost(page = 1) {
    console.log("yay we are inside the fetchBlogPost function ")
    setLoading(true);
    try {
      const pageUrl = `${url}?page=${page}`;
      const result = await fetch(pageUrl);
      const data = await result.json();
      console.log(data);
      setPage(page);
      setTotalPage(data.totalPages);
      setPosts(data.posts);
      // console.log(data.posts)
    } catch (error) {
      alert("Error occured: ", error);
      setPage(1);
      setTotalPage(1);
      setPosts([]);
    }
    setLoading(false);
  }

  function pageChange(page) {
    fetchBlogPost(page);
  }
  const value = {
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    posts,
    setPosts,
    pageChange,
    fetchBlogPost,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
