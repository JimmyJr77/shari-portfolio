import React, { lazy, Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const FloatingChat = lazy(() => import('./FloatingChat'))

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingChat />
      </Suspense>
    </>
  )
}
