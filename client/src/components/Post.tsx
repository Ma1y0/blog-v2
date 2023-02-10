const Post = ({ post }: any) => {
    return (
        <div class="border p-3 rounded-lg">
            <div>
                <h2 class="font-semibold text-5xl">{post.title}</h2>
                <small>By {post.authorName}</small>
            </div>
            
        </div>
    )
}

export default Post 