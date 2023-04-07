import styles from './SearchBar.module.scss'
import search_img from '../../assets/icon-search.svg'
import { useEffect, useRef, useState } from 'react'

interface Props {
  setQuery: (search: string) => void
  err: boolean
}

const SearchBar = ({ setQuery, err }: Props) => {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (name !== '') {
      setQuery(name)
    }
    setName('')
  }

  return (
    <section className={styles.searchBar}>
      <img src={search_img} alt="search" className={styles.search} />
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
          type="text"
          placeholder="Search GitHub username…"
          className={styles.search_input}
        />
        <button type="submit" className={styles.search_button}>
          Search
        </button>
        {err && <div className={styles.no_results}>No results</div>}
      </form>
    </section>
  )
}

export default SearchBar
