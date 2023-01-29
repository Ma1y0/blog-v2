import { useEffect, useState } from "preact/hooks"
import Post from "../components/Post"

const HomePage = () => {
    const [feed, setFeed] = useState()

    const getFeed = () => {
        fetch("http://localhost:8080/post")
            .then(res => res.json())
            .then(data => data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
            .then(data => setFeed(data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getFeed()
    }, [])

    return (
        <main class="min-h-screen m-3">
            <div class="flex flex-col gap-3 flex-wrap m-3">
                {feed ? feed.map((post: any) => (
                    <a href={`/posts/${post.id}`}>
                        <Post post={post} />
                    </a>
                )) : "Why?"}
            </div>
        </main>
    )
}

export default HomePage