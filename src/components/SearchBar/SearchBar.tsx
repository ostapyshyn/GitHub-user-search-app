import styles from './SearchBar.module.scss'
import search from '../../assets/icon-search.svg'
import { useEffect, useRef } from 'react'

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <section className={styles.searchBar}>
      <img src={search} alt="search" className={styles.search} />
      <form>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search GitHub username…"
          className={styles.search_input}
        />
        <button type="button" className={styles.search_button}>
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar
