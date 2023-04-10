import UserCard from './components/UserCard'
import Header from './components/Header'
import './App.css'
import SearchBar from './components/SearchBar'
import { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { User, fetchUser } from './api'
import ThemeContext from './context/ThemeContext'

function App() {
  const [query, setQuery] = useState('octocat')
  const [userData, setUserData] = useState<User | undefined>()
  const [err, setErr] = useState(false)
  const { lightMode, modeChanger } = useContext(ThemeContext)

  useEffect(() => {
    getGithubUserData()
  }, [query])

  async function getGithubUserData() {
    const resp = await fetch(`https://api.github.com/users/${query}`)
    if (!resp.ok) {
      return setErr(true)
    }
    setErr(false)
    const data = await resp.json()
    setUserData(data)
  }

  return (
    <div className="App" data-theme={`${lightMode ? 'dark' : null}`}>
      <Header />
      <SearchBar setQuery={setQuery} err={err} />
      <UserCard data={userData} />
    </div>
  )
}

export default App
