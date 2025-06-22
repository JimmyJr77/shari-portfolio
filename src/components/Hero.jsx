// src/components/Hero.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  const [angle, setAngle] = useState(0)
  const photoUrl = import.meta.env.BASE_URL + 'assets/shari-photo.jpg'

  useEffect(() => {
    const onScroll = () => setAngle(window.scrollY * .2)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.photoWrapper}>
        <div
          className={styles.ring1}
          style={{ transform: `rotate(${angle}deg)` }}
        />
        <div
          className={styles.ring2}
          style={{ transform: `rotate(${angle * 0.6}deg)` }}
        />
        <div
          className={styles.ring3}
          style={{ transform: `rotate(${angle * 1.4}deg)` }}
        />
        <div className={styles.photoContainer}>
          <img src={photoUrl} alt="Shari Arroyo-Brown" />
        </div>
      </div>

      <div className={styles.inner}>
        <h1 className={styles.title}>
          Turning Complex Missions into  
          Stories People Trust and Act On
        </h1>
        <p className={styles.subtitle}>
          I design trust. From federal reforms to multimillion-dollar philanthropic investments, 
          I transform complexity into clear narratives and measurable impact.
        </p>
        <Link to="/#contact" className={styles.cta}>
          Let’s Connect
        </Link>
      </div>
    </section>
  )
}
