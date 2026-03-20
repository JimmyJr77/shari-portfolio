import React, { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import styles from './FloatingChat.module.css'

const CHAT_PLACEHOLDER = 'Ask how Shari can support your project or task...'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    streamProtocol: 'text',
  })

  return (
    <>
      <button
        type="button"
        className={styles.bubble}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        <span className={styles.bubbleIcon}>💬</span>
        <span className={styles.bubbleLabel}>Ask</span>
      </button>

      {open && (
        <>
          <div
            className={styles.backdrop}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            className={styles.panel}
            role="dialog"
            aria-label="Chat with Shari's assistant"
          >
            <header className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>How can Shari help?</h2>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </header>

            <div className={styles.messages}>
              {messages.length === 0 && !isLoading && (
                <p className={styles.placeholder}>
                  Ask about Shari's experience, skills, or how she can support your project.
                </p>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={m.role === 'user' ? styles.messageUser : styles.messageAssistant}
                >
                  <div className={styles.bubbleInner}>{m.content}</div>
                </div>
              ))}
              {isLoading && (
                <div className={styles.messageAssistant}>
                  <div className={styles.bubbleInner}>Thinking…</div>
                </div>
              )}
            </div>

            {error && (
              <p className={styles.error}>
                {error.message || 'Something went wrong. Run "vercel dev" for local chat, or deploy to Vercel.'}
              </p>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <textarea
                value={input ?? ''}
                onChange={handleInputChange}
                placeholder={CHAT_PLACEHOLDER}
                rows={2}
                disabled={isLoading}
                className={styles.input}
              />
              <button
                type="submit"
                disabled={isLoading || !(input ?? '').trim()}
                className={styles.submit}
              >
                {isLoading ? '…' : 'Send'}
              </button>
            </form>
          </aside>
        </>
      )}
    </>
  )
}
