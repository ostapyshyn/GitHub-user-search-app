import styles from './SearchBar.module.scss'
import search from '../../assets/icon-search.svg'

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <div>
        <form>
          <img src={search} alt="search" />
          <input type="text" placeholder="Search GitHub username…" />
          <button type="button" className={styles.search_button}>
            Search
          </button>
        </form>
      </div>
    </section>
  )
}

export default SearchBar
