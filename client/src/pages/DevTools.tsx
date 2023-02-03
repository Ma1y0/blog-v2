import { useContext } from "preact/hooks"
import UserContext from "../lib/userContext"

const DevTools = () => {
    const { user, setUserContext } = useContext(UserContext)

    const sigOut = () => {
        setUserContext({})
        document.cookie = 'jwt=; Max-Age=-99999999;'
    }

    return (
        <main class="min-h-screen">
            <button>Sign Out</button>
        </main>
    )
}

export default DevTools