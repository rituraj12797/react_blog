import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Blog  from "./Blog";
import "./Blogs_section.css"


function Blogs() {
    let { posts } = useContext(AppContext);
    
    return (
        <div className="blog">
            {posts.map((post)=>{
                return(<Blog post={post} key={post.id}  />)
            })}
        </div>
    );
}

export default Blogs;