// src/components/Hero.jsx
import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css'


const CV_URL = import.meta.env.BASE_URL + 'assets/Shari-CV.pdf'

const CONTACT = {
  name: 'Shari Arroyo-Brown',
  phone: '347-954-5735',
  phoneRaw: '3479545735',
  email: 'sharibrown87@gmail.com',
}

const FADE_TEXTS = [
  'From federal reforms to multimillion-dollar philanthropic investments...',
  '...I transform complexity into clear narratives and measurable impact.',
]

function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${CONTACT.name}`,
    `TEL;TYPE=CELL:${CONTACT.phoneRaw}`,
    `EMAIL:${CONTACT.email}`,
    'END:VCARD',
  ].join('\r\n')
  const blob = new Blob([vcard], { type: 'text/vcard' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'Shari-Arroyo-Brown.vcf'
  a.click()
  URL.revokeObjectURL(a.href)
}

export default function Hero() {
  const [angle, setAngle] = useState(0)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)
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
          <button type="button" className={styles.cta} onClick={() => setConnectOpen(true)}>
            Connect
          </button>
        </div>

        {connectOpen && (
          <>
            <div
              className={styles.modalBackdrop}
              onClick={() => setConnectOpen(false)}
              aria-hidden="true"
            />
            <div className={styles.contactModal} role="dialog" aria-labelledby="contact-modal-title">
              <h2 id="contact-modal-title" className={styles.contactModalTitle}>
                {CONTACT.name}
              </h2>
              <a href={`tel:${CONTACT.phoneRaw}`} className={styles.contactLink}>
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className={styles.contactLink}>
                {CONTACT.email}
              </a>
              <button type="button" className={styles.saveContactBtn} onClick={downloadVCard}>
                Save Contact
              </button>
              <button type="button" className={styles.modalClose} onClick={() => setConnectOpen(false)} aria-label="Close">
                ×
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
