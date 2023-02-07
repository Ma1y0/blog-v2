import UserContext from "../lib/userContext"
import { useContext, useState } from "preact/hooks"
import { route } from "preact-router"

const LogIn = () => {
    const { setUserContext, user } = useContext(UserContext)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const onInput = (e: Event) => {
        const target = e.target as HTMLInputElement
        setFormData((prevState) => ({
            ...prevState,
            [target.name]: [target.value]
        }))
    }

    const onSubmit = async (e: Event) => {
        e.preventDefault()

        const data = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: formData.email[0],
                password: formData.password[0]
            })
        })  
            .then(res => res.json())
            .catch(err => console.error(err))

        if (data !== undefined) {
            const accessToken = data.accessToken
            const expiration = new Date()
            expiration.setDate(expiration.getDate() + 30)
            document.cookie = `jwt=${accessToken}; expires=${expiration.toUTCString()}; path=/;`
            setUserContext(data.user)
        }   

        route("/")

    }

    return (
        <main class="min-h-screen p-6">
            <form class="flex flex-col items-center" onSubmit={onSubmit}>
                <input value={formData.email} onInput={onInput} name="email" placeholder="e-mail" type="email" class="rounded-lg p-2 w-[20%]" required />
                <input value={formData.password} onInput={onInput} name="password" placeholder="password" type="password" class="rounded-lg p-2 mt-1 w-[20%]" required />
                <button type="submit" class="mt-3">Log In</button>
            </form>
        </main>
    )
}

export default LogIn