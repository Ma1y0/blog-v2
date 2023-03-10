import { route } from "preact-router"
import { useContext, useState } from "preact/hooks"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import UserContext from "../lib/userContext"

const NewPost = () => {
    const { setUserContext, user } = useContext(UserContext)

    const [formData, setFormData] = useState({
        title: "",
        markdown: ""
    })


    const onInput = (e: Event) => {
        const target = e.target as HTMLInputElement
        setFormData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const onSubmit = async (e: Event) => {
        e.preventDefault()

        await fetch("http://localhost:8080/post", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: formData.title,
                content: formData.markdown,
                authorId: user.id
            })
        })  
            .catch(err => console.error(err))

        route("/")
    }

    return (
        <main class="min-h-screen p-6">
            <h1>New Post</h1>
            <form class="flex flex-col flex-wrap" onSubmit={onSubmit}>
                <div>
                    <input onInput={onInput} name="title" class="rounded-lg p-2 mt-6" value={formData.title} type="text" placeholder="Title" required />
                    <textarea onInput={onInput} name="markdown" class="w-full h-64 mt-3 rounded-lg p-2" placeholder="Content" value={formData.markdown} required />
                </div>
                <button>Publish</button>
            </form>
            <ReactMarkdown className="markdown-preview" children={formData.markdown}/>
        </main>
    )
}

export default NewPost