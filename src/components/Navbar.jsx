import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Shari Arroyo-Brown
        </Link>

        {/* Hamburger button */}
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={toggle}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <ul
          className={`${styles.links} ${open ? styles.open : ''}`}
          onClick={() => setOpen(false)}
        >
          <li><Link to="/"       className={styles.link}>Home</Link></li>
          <li><Link to="/#services" className={styles.link}>Services</Link></li>
          <li><Link to="/#cases"    className={styles.link}>Case Studies</Link></li>
          <li><Link to="/#contact"  className={styles.link}>Contact</Link></li>
          <li><Link to="/about"     className={styles.link}>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
