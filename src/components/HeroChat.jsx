// Hero chat UI - only loaded when SHOW_CHAT is true (avoids useChat on static hosts like GitHub Pages)
import React, { useState } from 'react'
import { useChat } from 'ai/react'
import styles from './Hero.module.css'

const CHAT_PLACEHOLDER = 'Provide your requirements and ask me how my experience and expertise can help you.'

export default function HeroChat() {
  const [chatExpanded, setChatExpanded] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
  })

  return (
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
            value={input ?? ''}
            onChange={handleInputChange}
            onFocus={() => setChatExpanded(true)}
            placeholder={CHAT_PLACEHOLDER}
            rows={1}
            disabled={isLoading}
            className={styles.chatInput}
          />
          <button type="submit" disabled={isLoading || !(input ?? '').trim()} className={styles.chatSubmit}>
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
  )
}
