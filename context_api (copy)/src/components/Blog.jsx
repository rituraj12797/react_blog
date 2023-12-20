import { Link } from "react-router-dom";
function Blog({post}) {
    return ( <div className="Blogs_section">
         <Link to={"blog/"+post.id}>{post.title}</Link>
         <i>By</i> {post.author} on <span>{post.date}</span>
         <br>
         </br>
         <p>{post.category}</p>
         <div>
            {post.content}
         </div>
         <br></br>
         <br></br>

         <div>
            {post.tags.map((tag,index)=>{
                return(<span key={index} className="tag">
                    #{tag}
                </span>)
            })}
         </div>
         <br></br>
         <br></br>
         <br></br>

    </div> );
}

export default Blog;