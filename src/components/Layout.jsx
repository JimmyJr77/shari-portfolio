import React, { lazy, Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ContactModalProvider } from '../context/ContactModalContext'

const FloatingChat = lazy(() => import('./FloatingChat'))

export default function Layout({ children }) {
  return (
    <ContactModalProvider>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingChat />
      </Suspense>
    </ContactModalProvider>
  )
}
