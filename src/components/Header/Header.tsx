import styles from './Header.module.scss'
import sun from '../../assets/icon-sun.svg'

const Header = () => {
  return (
    <section className={styles.header}>
      <h1 className={styles.logo}>devfinder</h1>

      <button className={styles.switcher}>
        <span>LIGHT</span>
        <img src={sun} alt="sun" />
      </button>
    </section>
  )
}

export default Header
