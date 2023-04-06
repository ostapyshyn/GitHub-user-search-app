import UserCard from './components/UserCard'
import Header from './components/Header'
import './App.css'
import SearchBar from './components/SearchBar'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUser } from './api'

function App() {
  const [search, setSearch] = useState('octocat')
  const { data, refetch } = useQuery(['user'], () => fetchUser(search))
  console.log(data, 'here')

  return (
    <div className="App">
      <Header />
      <SearchBar search={search} setSearch={setSearch} refetch={refetch} />
      <UserCard data={data} />
    </div>
  )
}

export default App
