// src/components/Hero.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useChat } from 'ai/react'
import styles from './Hero.module.css'

const CHAT_PLACEHOLDER = 'Provide your requirements and ask me how my experience and expertise can help you.'
const SHOW_CHAT = false  // set to true to re-enable the AI Ask capability

export default function Hero() {
  const [angle, setAngle] = useState(0)
  const [chatExpanded, setChatExpanded] = useState(false)
  const photoUrl = import.meta.env.BASE_URL + 'assets/shari-photo.jpg'

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
  })

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
          From federal reforms to multimillion-dollar philanthropic investments, 
          I transform complexity into clear narratives and measurable impact.
        </p>

        {/* AI assistant text box - hidden when SHOW_CHAT is false */}
        {SHOW_CHAT && (
        <div className={styles.chatWrapper}>
          <div className={`${styles.chatBox} ${chatExpanded ? styles.chatExpanded : ''}`}>
            {messages.length > 0 && (
              <div className={styles.chatMessages}>
                {messages.map((m) => (
                  <div key={m.id} className={m.role === 'user' ? styles.chatUser : styles.chatAssistant}>
                    <div className={styles.chatBubble}>{m.content}</div>
                  </div>
                ))}
                {isLoading && (
                  <div className={styles.chatAssistant}>
                    <div className={styles.chatBubble}>Thinking…</div>
                  </div>
                )}
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.chatForm}>
              <textarea
                value={input}
                onChange={handleInputChange}
                onFocus={() => setChatExpanded(true)}
                placeholder={CHAT_PLACEHOLDER}
                rows={1}
                disabled={isLoading}
                className={styles.chatInput}
              />
              <button type="submit" disabled={isLoading || !input.trim()} className={styles.chatSubmit}>
                {isLoading ? '…' : 'Ask'}
              </button>
            </form>
            {error && (
              <p className={styles.chatError}>
                {error.message || 'Something went wrong. Try again or connect with me directly below.'}
              </p>
            )}
          </div>
        </div>
        )}

        <Link to="/#contact" className={styles.cta}>
          Let’s Connect
        </Link>
      </div>
    </section>
  )
}
