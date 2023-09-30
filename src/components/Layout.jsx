import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { motion as m } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <div id="overflow-fix">
      {/* don't remember the reason we used id instead of just using tailwind overflow-x-hidden... */}
      <Nav />
      <m.main
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          type: 'spring',
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
      </m.main>
      <Footer />
    </div>
  )
}
