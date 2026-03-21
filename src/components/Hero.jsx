// src/components/Hero.jsx
import React, { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'
import styles from './Hero.module.css'
import { useContactModal } from '../context/ContactModalContext'

const CV_URL = import.meta.env.BASE_URL + 'assets/Shari-CV.pdf'

const FADE_TEXTS = [
  'From federal reforms to multimillion-dollar philanthropic investments...',
  '...I transform complexity into clear narratives and measurable impact.',
]

export default function Hero() {
  const [angle, setAngle] = useState(0)
  const [resumeOpen, setResumeOpen] = useState(false)
  const { openContactModal } = useContactModal()
  const [fadeIndex, setFadeIndex] = useState(0)
  const photoUrl = import.meta.env.BASE_URL + 'assets/shari-photo.jpg'

  useEffect(() => {
    const onScroll = () => setAngle(window.scrollY * .05)  // 4x slower rotation
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setFadeIndex((i) => (i + 1) % FADE_TEXTS.length), 4000)
    return () => clearInterval(id)
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
          <span className={styles.fadeWrapper}>
            {FADE_TEXTS.map((text, i) => (
              <span
                key={i}
                className={`${styles.fadeText} ${i === fadeIndex ? styles.fadeActive : ''}`}
                aria-hidden={i !== fadeIndex}
              >
                {text}
              </span>
            ))}
          </span>
        </h1>

        <div className={styles.buttonRow}>
          <div className={styles.resumeWrapper}>
            <button
              type="button"
              className={styles.ctaSecondary}
              onClick={() => setResumeOpen((o) => !o)}
              aria-expanded={resumeOpen}
              aria-haspopup="true"
            >
              Resume
            </button>
            {resumeOpen && (
              <>
                <div
                  className={styles.resumeBackdrop}
                  onClick={() => setResumeOpen(false)}
                  aria-hidden="true"
                />
                <div className={styles.resumeDropdown}>
                  <a href={CV_URL} download="Shari-Arroyo-Brown-CV.pdf" className={styles.resumeOption} onClick={() => setResumeOpen(false)}>
                    Download
                  </a>
                  <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={styles.resumeOption} onClick={() => setResumeOpen(false)}>
                    View
                  </a>
                </div>
              </>
            )}
          </div>
          <a
            href="https://www.linkedin.com/in/shari-arroyo-brown/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedInBtn}
            aria-label="LinkedIn profile"
          >
            <Linkedin size={22} strokeWidth={2} />
          </a>
          <button type="button" className={styles.cta} onClick={openContactModal}>
            Connect
          </button>
        </div>
      </div>
    </section>
  )
}
