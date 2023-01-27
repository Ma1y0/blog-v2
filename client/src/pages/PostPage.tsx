import { useEffect, useState } from "preact/hooks"
import ReactMarkdown from "react-markdown"

const PostPage = ({ id, ...props }) => {
    const [post, setPost] = useState()

    const getPost = (id: string) => {
        fetch(`http://localhost:8080/post/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getPost(id)
    }, [])

    return (
        <main class="min-h-screen m-3">
            {post ? 
            <div>
                <h1 class="p-6 pb-0">{post.title}</h1>
                <small class="pl-6">By {post.authorName}</small>
                <ReactMarkdown class="p-6" children={post.content}/>
            </div>
            : null 
            }
        </main>
    )
}

export default PostPage