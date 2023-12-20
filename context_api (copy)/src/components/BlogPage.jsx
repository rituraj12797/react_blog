import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function BlogPage() {
  const { id } = useParams();
  let index = parseInt(id.substring(4, 5)) - 1;
  let { posts } = useContext(AppContext);
  let post = posts[index];

  return (
    <div>
        <div className="Blogs_section">
          <h1 to={"blog/" + post.id}>{post.title}</h1>
          <i>By</i> {post.author} on <span>{post.date}</span>
          <br></br>
          <p>{post.category}</p>
          <div>{post.content}</div>
          <br></br>
          <br></br>
          <div>
            {post.tags.map((tag, index) => {
              return (
                <span key={index} className="tag">
                  #{tag}
                </span>
              );
            })}
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      
    </div>
  );
}

export default BlogPage;
