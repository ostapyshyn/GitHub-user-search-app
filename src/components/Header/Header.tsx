import styles from './Header.module.scss'
import sun from '../../assets/icon-sun.svg'
import moon from '../../assets/icon-moon.svg'
import { useState } from 'react'

const Header: React.FC = () => {
  const [theme, setTheme] = useState(true)
  return (
    <section className={styles.header}>
      <h1 className={styles.logo}>devfinder</h1>

      <button className={styles.switcher} onClick={() => setTheme(!theme)}>
        <span>{theme ? 'LIGHT' : 'DARK'}</span>
        <img src={theme ? sun : moon} alt="sun" />
      </button>
    </section>
  )
}

export default Header
