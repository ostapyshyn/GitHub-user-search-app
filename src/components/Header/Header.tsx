import styles from './Header.module.scss'
import sun from '../../assets/icon-sun.svg'
import moon from '../../assets/icon-moon.svg'
import { useContext, useState } from 'react'
import ThemeContext from '../../context/ThemeContext'

const Header: React.FC = () => {
  const { lightMode, modeChanger } = useContext(ThemeContext)

  return (
    <section className={styles.header}>
      <h1 className={styles.logo}>devfinder</h1>

      <button className={styles.switcher} onClick={modeChanger}>
        <span>{lightMode ? 'LIGHT' : 'DARK'}</span>
        <img src={lightMode ? sun : moon} alt="sun" />
      </button>
    </section>
  )
}

export default Header
