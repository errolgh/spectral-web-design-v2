import React from 'react'
import Owl from '../images/svg/owl.js'
import Facebook from '../images/svg/icon-facebook.svg'
import Twitter from '../images/svg/icon-twitter.svg'
import Pinterest from '../images/svg/icon-pinterest.svg'
import Instagram from '../images/svg/icon-instagram.svg'

export default function Footer() {
  return (
    <footer className="py-16 bg-efferBlue">
      {/* <!-- Footer Container --> */}
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* <!-- Logo --> */}
        <div className='flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:pr-8'>
          <div className="w-20">
            <Owl theme="light" />
          </div>
          <div className="flex flex-col text-center justify-center z-10 text-slate-200 font-bold">
            <span className="text-xl tracking-wider">
              Spectral
            </span>
            <span className="text-xs tracking-widest uppercase">
              Digital Labs
            </span>
          </div>
        </div>
        {/* <!-- Menus Container --> */}
        <div className="flex flex-col space-y-12 md:space-x-48 md:flex-row md:space-y-0">
          {/* <!-- Menu 1 --> */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Menu</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Home
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/services"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Services
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/portfolio"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Portfolio
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/blog"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Blog
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/about"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                About
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/contact"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Contact
              </a>
            </div>
          </div>
          {/* <!-- Menu 2 --> */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Services</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Web Development
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Web Design
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Digital Marketing
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Support
              </a>
            </div>
          </div>
          {/* <!-- Menu 3 --> */}
          {/* <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Site Map</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                About
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Our team
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Careers
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                className="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Contact
              </a>
            </div>
          </div> */}
        </div>
        {/* <!-- Social Container --> */}
        <div className="flex flex-col items-center space-y-4 md:items-start pl-4">
          <div className="flex space-x-6">
            <a href="/">
              <Facebook />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <Pinterest />
            </a>
            <a href="/">
              <Instagram />
            </a>
          </div>
          <div className="text-center md:text-left text-neutral-200">
            <p>© {new Date().getFullYear()} Spectral Digital Labs</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
