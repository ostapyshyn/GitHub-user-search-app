import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <div>
        <input type="text" placeholder="Search GitHub username…" />
        <button>search</button>
      </div>
    </section>
  )
}

export default SearchBar
