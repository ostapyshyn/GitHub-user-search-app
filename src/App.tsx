import UserCard from './components/UserCard'
import Header from './components/Header'
import './App.css'
import SearchBar from './components/SearchBar'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { User, fetchUser } from './api'

function App() {
  const [query, setQuery] = useState('')
  const [userData, setUserData] = useState<User | undefined>()
  const [err, setErr] = useState(false)

  useEffect(() => {
    getGithubUserDefault()
  }, [])

  useEffect(() => {
    if (query !== '') {
      getGithubUserData()
    }
  }, [query])

  async function getGithubUserDefault() {
    const resp = await fetch(`https://api.github.com/users/octocat`)
    if (!resp.ok) {
      return setErr(true)
    }
    setErr(false)
    const data = await resp.json()
    setUserData(data)
  }

  async function getGithubUserData() {
    const resp = await fetch(`https://api.github.com/users/${query}`)
    if (!resp.ok) {
      return setErr(true)
    }
    setErr(false)
    const data = await resp.json()
    setUserData(data)
  }

  console.log(query, 'here')

  return (
    <div className="App">
      <Header />
      <SearchBar setQuery={setQuery} err={err} />
      <UserCard data={userData} />
    </div>
  )
}

export default App
