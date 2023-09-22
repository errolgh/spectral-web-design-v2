import React, { useState } from 'react'
import Owl from '../images/svg/owl.js'
import { Link } from 'gatsby'

export default function Nav() {
// @TODO: <Nav /> now spans 100% of the window. This may not be ideal for larger screens
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex justify-center">
      <nav className="bg-efferBlue text-efferBlue w-full absolute flex items-center justify-between font-bold md:px-5 md:text-slate-100 lg:justify-center lg:gap-x-80 xl:gap-x-96">
        <div className="flex">
          {/* <!-- Logo --> */}
          <Link to="/">
            <div className="flex w-20 p-4 pt-6 relative z-10">
              <Owl theme="light"/>
            </div>
          </Link>
          <div className="flex flex-col text-center justify-center z-10">
            <span className="text-xl tracking-wider pr-1 hidden md:inline">
              Spectral
            </span>
            <span className="text-xs tracking-widest uppercase hidden md:inline">
              Digital Labs
            </span>
          </div>
        </div>
        <ul
          className={`${open ? 'animate-right fade' : ''}
        transition duration-700 animate-li 
        absolute z-30 top-0 left-full w-3/4
        pr-12 pt-24 text-right h-screen bg-slate-200 lg:bg-transparent
        flex flex-col space-y-6 font-alata md:p-4 md:h-10 md:bg-transparent md:w-min
        md:visible md:flex-row md:space-x-8 md:space-y-0 md:static md:mb-6`}
        >
          <li className="hover:text-teal-400">
            <Link to="/" activeClassName="active">
              Home
            </Link>
            {/* <div className="mx-2 group-hover:border-b group-hover:border border-teal-700"></div> */}
          </li>
          <li className="hover:text-teal-400">
            <Link to="/services" activeClassName="active">
              Services
            </Link>
            {/* <div className="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
          </li>
          <li className="hover:text-teal-400">
            <Link to="/portfolio" activeClassName="active">
              Portfolio
            </Link>
            {/* <div className="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
          </li>
          <li className="hover:text-teal-400">
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
            {/* <div className="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
          </li>
          <li className="hover:text-teal-400">
            <Link to="/about" activeClassName="active">
              About
            </Link>
            {/* <div className="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
          </li>
          <li className="hover:text-teal-400">
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
            {/* <div className="mx-2 group-hover:border-b group-hover:border-border-teal-700"></div> */}
          </li>
        </ul>

        {/* <!-- Hamburger Button --> */}
        <div className="md:hidden p-2 pr-4">
          <button
            onClick={() => setOpen(!open)}
            id="menu-btn"
            type="button"
            className={`${
              open ? 'open' : ''
            } z-40 block hamburger md:hidden focus:outline-none focus:ring-blue-50`}
          >
            {/* <!-- open class above gets toggled with js--> */}
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
