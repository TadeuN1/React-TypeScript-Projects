import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostManager = () => {

  const [ posts, setPosts] = useState([]);
  const [ error, setError] = useState("")

  useEffect(() => {

    const fetchPosts = async () => {
      try {

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        

        setPosts(response.data.slice(0, 5))

      } catch (error) {
          setError(error.message)
      }
    }

    fetchPosts();
  }, [])


  return (
    <div>
        <h2> Gerenciar Posts </h2>
        <PostForm />
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p> {post.body}</p>
            <button> Editar </button>
           </div>
        ))}
    </div>
  );
};

export default PostManager