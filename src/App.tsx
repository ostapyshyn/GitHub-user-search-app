import UserCard from './components/UserCard'
import Header from './components/Header'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <UserCard />
    </div>
  )
}

export default App
