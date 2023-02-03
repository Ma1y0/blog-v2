import { useState } from "preact/hooks"

const Register = () => {
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

    return (
        <main class="min-h-screen p-6">
            <form class="flex flex-col items-center" onSubmit={onSubmit}>
                <input value={formData.name} onInput={onInput} name="name" placeholder="name" type="text" class="rounded-lg p-2 w-[20%]" required />
                <input value={formData.email} onInput={onInput} name="email" placeholder="e-mail" type="email" class="rounded-lg p-2 w-[20%]" required />
                <input value={formData.password} onInput={onInput} name="password" placeholder="password" type="password" class="rounded-lg p-2 mt-1 w-[20%]" required />
                <button type="submit" class="mt-3">Log In</button>
            </form>
        </main>
    )
}

export default Register