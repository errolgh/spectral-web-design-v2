import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div id='overflow-fix'>
      <Nav />
        <main>{children}</main>
      <Footer />
    </div>
  )
}
