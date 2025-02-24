import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const PostLoader = () => {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [sucessMessage, setSucessMessage] = useState()
    const {postId} = useParams();

    useEffect(() => {

        const fetchPost = async() => {
            setLoading(true)
            setError("")
            setSucessMessage("")

            try {

                if(postId > 500){
                    setPost(null)
                    throw new Error("Post não existente.")
                }

            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            setPost(response.data)
            setSucessMessage(" Post carregado com sucesso.")
            
            } catch (error) {
                setError("Falha ao carregar post: " + error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPost();
    }, [postId])

  return (
    <div>
        <h1> Post: {postId} </h1>
        {loading && <p> Carregando .... </p>}
        {sucessMessage && (<p style={{ color: "green"}}> { sucessMessage }</p> )}
        {error && (<p style={{ color: "red"}}> { error }</p> )}

        { post && (
            <div>
                <h2> {post.title}</h2>
                <p>  {post.body} </p>
             </div>   
        )}
    </div>
  )
}

export default PostLoader