// src/components/Hero.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <h1 className={styles.title}>
        Turning Complex Missions into Stories People Trust and Act On
      </h1>
      <p className={styles.subtitle}>
        I design trust. From federal reforms to multimillion-dollar philanthropic investments, I transform complexity into clear narratives and measurable impact.
      </p>
      <Link to="/#contact" className={styles.cta}>
        Let’s Connect
      </Link>
    </section>
  )
}
