import './app.css'
import Router from "preact-router"
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPost from './pages/NewPost'
import NavBar from './components/NavBar'
import LogIn from "./pages/Login"

export function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Router>
        <HomePage path="/" />
        <LogIn path="/login" />
        <PostPage path="/posts/:id" />
        <NewPost path="/posts/new" />
      </Router>
    </>
  )
}
