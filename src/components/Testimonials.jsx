import React, { useState } from 'react'
import data from '../data/testimonials.json'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const { quote, name, role } = data[index]

  const prev = () => setIndex((i) => (i === 0 ? data.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === data.length - 1 ? 0 : i + 1))

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <button onClick={prev} className={styles.control} aria-label="Previous">
          ‹
        </button>
        <div className={styles.card}>
          <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
          <p className={styles.author}>
            <strong>{name}</strong>, <span className={styles.role}>{role}</span>
          </p>
        </div>
        <button onClick={next} className={styles.control} aria-label="Next">
          ›
        </button>
      </div>
    </section>
  )
}
