import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo always goes home */}
        <Link to="/" className={styles.logo}>
          Arroyo-Brown
        </Link>
        <ul className={styles.links}>
          <li>
            <Link to="/" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/#services" className={styles.link}>Services</Link>
          </li>
          <li>
            <Link to="/#cases" className={styles.link}>Case Studies</Link>
          </li>
          <li>
            <Link to="/#contact" className={styles.link}>Contact</Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
