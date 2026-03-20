import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useContactModal } from '../context/ContactModalContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { openContactModal } = useContactModal()
  const toggle = () => setOpen((prev) => !prev)

  const handleContactClick = () => {
    setOpen(false)
    openContactModal()
  }

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
          <li><Link to="/work"    className={styles.link}>Deliverables</Link></li>
          <li><button type="button" className={styles.linkBtn} onClick={handleContactClick}>Contact</button></li>
          <li><Link to="/about"     className={styles.link}>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
