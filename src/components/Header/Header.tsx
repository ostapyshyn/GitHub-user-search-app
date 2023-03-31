import styles from './Header.module.scss'

const Header = () => {
  return (
    <section className={styles.header}>
      <h1 className={styles.logo}>devfinder</h1>
      <p>dark</p>
    </section>
  )
}

export default Header
