import { useContext } from "preact/hooks"
import UserContext from "../lib/userContext"

const NavBar = () => {
    const { user } = useContext(UserContext)

    return (
        <div class="w-full mb-5 p-3">
            <div class="flex justify-center items-center w-full">
                <nav class="flex w-full flex-wrap justify-between items-center">
                    <a href="/"><h1 class="font-semibold text-7xl">BLOG</h1></a>
                    <div class="flex">
                        {user.id ? <button><a href="/posts/new">New</a></button> : <><button><a href="/login">Log In</a></button> <button><a href="/register">Register</a></button></> }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar