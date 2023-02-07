import { useContext, useState } from 'preact/hooks'
import UserContext from '../lib/userContext'

const Register = () => {
    const { setUserContext, user } = useContext(UserContext)
    
    const [formData, setFormData] = useState({
        name: "",
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

        const data = await fetch("http://localhost:8080/user/register", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formData.name[0],
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
    }

    return (
        <main class="min-h-screen">
            <form class="flex flex-col items-center" onSubmit={onSubmit}> 
                <input type="text" placeholder="name" value={formData.name} name="name" onInput={onInput} class="rounded-lg p-2 mt-1 w-[20%]" required />
                <input type="email" placeholder="email" value={formData.email} name="email" onInput={onInput} class="rounded-lg p-2 mt-1 w-[20%]" required />
                <input type="password" placeholder="password" value={formData.password} name="password" onInput={onInput} class="rounded-lg p-2 mt-1 w-[20%]" required />

                <button type="submit" class="mt-5">Register</button>
            </form>
        </main>
    )
}

export default Register