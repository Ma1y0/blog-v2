import { useState } from 'preact/hooks'
import Router from "preact-router"
import './app.css'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPost from './pages/NewPost'
import NavBar from './components/NavBar'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Router>
        <HomePage path="/" />
        <PostPage path="/posts/:id" />
        <NewPost path="/posts/new" />
      </Router>
    </>
  )
}
