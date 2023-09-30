import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div id="overflow-fix">
      {/* don't remember the reason we used id instead of just using tailwind overflow-x-hidden... */}
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
