import './app.css'
import { useState } from 'preact/hooks'
import Router from 'preact-router'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPost from './pages/NewPost'
import NavBar from './components/NavBar'
import LogIn from "./pages/Login"
import UserContext from './lib/userContext'
import DevTools from './pages/DevTools'
import Register from './pages/Register'

export function App() {
  const [user, setUser] = useState({})

  const setUserContext = (user: any) => {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{user, setUserContext}}>
      <header>
        <NavBar/>
      </header>
      <Router>
        <HomePage path="/" />
        <LogIn path="/login" />
        <Register path="/register" /> 
        <PostPage path="/posts/:id" />
        <NewPost path="/posts/new" />
      </Router>
    </UserContext.Provider>
  )
}
