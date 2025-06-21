// src/components/Contact.jsx
import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Contact</h2>
        <p className={styles.name}>Shari Arroyo-Brown</p>
        <p className={styles.info}>
          <a href="tel:3479545735" className={styles.link}>
            347-954-5735
          </a>
        </p>
        <p className={styles.info}>
          <a href="mailto:sharibrown87@gmail.com" className={styles.link}>
            sharibrown87@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
