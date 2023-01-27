import { useState } from 'preact/hooks'
import Router from "preact-router"
import './app.css'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPost from './pages/NewPost'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <HomePage path="/" />
        <PostPage path="/posts/:id" />
        <NewPost path="/posts/new" />
      </Router>
    </>
  )
}
