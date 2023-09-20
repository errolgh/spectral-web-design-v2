import React from 'react'
import Owl from '../images/svg/owl.js'
import Facebook from '../images/svg/icon-facebook.svg'
import Twitter from '../images/svg/icon-twitter.svg'
import Pinterest from '../images/svg/icon-pinterest.svg'
import Instagram from '../images/svg/icon-instagram.svg'

export default function Footer() {
  return (
    <footer class="py-16 bg-stone-900">
      {/* <!-- Footer Container --> */}
      <div class="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* <!-- Logo --> */}
        <div className="w-20">
          <Owl />
        </div>
        {/* <!-- Menus Container --> */}
        <div class="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* <!-- Menu 1 --> */}
          <div class="flex flex-col items-center w-full md:items-start">
            <div class="mb-5 font-bold text-white capitalize">Menu</div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Link shortening
              </a>
            </div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Branded links
              </a>
            </div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Analytics
              </a>
            </div>
          </div>
          {/* <!-- Menu 2 --> */}
          <div class="flex flex-col items-center w-full md:items-start">
            <div class="mb-5 font-bold text-white capitalize">Services</div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Blog
              </a>
            </div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Resources
              </a>
            </div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Support
              </a>
            </div>
          </div>
          {/* <!-- Menu 3 --> */}
          <div class="flex flex-col items-center w-full md:items-start">
            <div class="mb-5 font-bold text-white capitalize">Site Map</div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                About
              </a>
            </div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Our team
              </a>
            </div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Careers
              </a>
            </div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="/"
                class="capitalize text-neutral-200 hover:text-cyan mb-1"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Social Container --> */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <div class="flex space-x-6">
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
          <div className="text-neutral-200 text-center md:text-left">
            <p>© {new Date().getFullYear()} Spectral Web Designs</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
