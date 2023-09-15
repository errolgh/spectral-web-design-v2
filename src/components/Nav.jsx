import React, { useState } from 'react'
import Owl from '../images/svg/owl.js'
import { Link } from 'gatsby'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav class="container mx-auto max-w-6xl relative flex items-center justify-between font-bold text-slate-600">
      <div class="flex">
        <div class="flex w-20 p-4 pt-6">
          {/* <!-- Logo --> */}
          <Owl />
        </div>
        <div class="flex flex-col text-center justify-center">
          <span class="text-xl tracking-wider pr-1 hidden md:inline">
            Spectral
          </span>
          <span class="text-xs tracking-widest uppercase hidden md:inline">
            Web Designs
          </span>
        </div>
      </div>
      <ul
        class={`${open ? 'animate-right fade' : ''}
        transition duration-700 animate-li 
        absolute z-30 top-0 left-full w-3/4
        pr-12 pt-24 text-right h-screen bg-slate-200
        flex flex-col space-y-6 font-alata md:p-4 md:h-10 md:bg-transparent md:w-min
        md:visible md:flex-row md:space-x-8 md:space-y-0 md:static md:scale-x-1`}
      >
        <li class="hover:text-teal-400">
          <Link to="/" activeClassName="active">
            Home
          </Link>
          {/* <div class="mx-2 group-hover:border-b group-hover:border border-teal-700"></div> */}
        </li>
        <li class="hover:text-teal-400">
          <Link to="/services" activeClassName="active">
            Services
          </Link>
          {/* <div class="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
        </li>
        <li class="hover:text-teal-400">
          <Link to="/portfolio" activeClassName="active">
            Portfolio
          </Link>
          {/* <div class="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
        </li>
        <li class="hover:text-teal-400">
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
          {/* <div class="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
        </li>
        <li class="hover:text-teal-400">
          <Link to="/about" activeClassName="active">
            About
          </Link>
          {/* <div class="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
        </li>
        <li class="hover:text-teal-400">
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
          {/* <div class="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
        </li>
      </ul>

      {/* <!-- Hamburger Button --> */}
      <div class="md:hidden p-2 pr-4">
        <button
          onClick={() => setOpen(!open)}
          id="menu-btn"
          type="button"
          class={`${
            open ? 'open' : ''
          } z-40 block hamburger md:hidden focus:outline-none focus:ring-blue-50`}
        >
          {/* <!-- open class above gets toggled with js--> */}
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  )
}
