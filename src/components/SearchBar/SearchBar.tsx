import styles from './SearchBar.module.scss'
import search_img from '../../assets/icon-search.svg'
import { useEffect, useRef } from 'react'

interface Props {
  search: string
  setSearch: (search: string) => void
  refetch: () => void
}

const SearchBar = ({ search, setSearch, refetch }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const userName = search ? search : ''
    if (search !== '') {
      setSearch(userName)
    }
    console.log('123')
  }

  return (
    <section className={styles.searchBar}>
      <img src={search_img} alt="search" className={styles.search} />
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          type="text"
          placeholder="Search GitHub username…"
          className={styles.search_input}
        />
        <button type="submit" className={styles.search_button} onClick={() => refetch()}>
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar
