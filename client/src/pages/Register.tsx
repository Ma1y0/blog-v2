import { useState } from 'preact/hooks';
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    return (
        <main class="min-h-screen">
            <form class="flex flex-col items-center"> 
                <input placeholder="name"/>
            </form>
        </main>
    )
}

export default Register