import React, { createContext, useContext, useState } from 'react'
import styles from '../components/ContactModal.module.css'

const CONTACT = {
  name: 'Shari Arroyo-Brown',
  phone: '347-954-5735',
  phoneRaw: '3479545735',
  email: 'sharibrown87@gmail.com',
}

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

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <ContactModalContext.Provider value={{ openContactModal: () => setOpen(true), closeContactModal: () => setOpen(false) }}>
      {children}
      {open && (
        <>
          <div
            className={styles.backdrop}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className={styles.modal} role="dialog" aria-labelledby="contact-modal-title">
            <h2 id="contact-modal-title" className={styles.title}>
              {CONTACT.name}
            </h2>
            <a href={`tel:${CONTACT.phoneRaw}`} className={styles.link}>
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className={styles.link}>
              {CONTACT.email}
            </a>
            <button type="button" className={styles.saveBtn} onClick={downloadVCard}>
              Save Contact
            </button>
            <button type="button" className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
          </div>
        </>
      )}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) return { openContactModal: () => {}, closeContactModal: () => {} }
  return ctx
}
