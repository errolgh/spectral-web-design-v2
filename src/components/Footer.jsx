import React from 'react'
import Owl from '../images/svg/owl.js'
// import Facebook from '../images/svg/icon-facebook.svg'
// import Twitter from '../images/svg/icon-twitter.svg'
// import Pinterest from '../images/svg/icon-pinterest.svg'
// import Instagram from '../images/svg/icon-instagram.svg'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="py-16 topography-gradient">
      {/*  Footer Container  */}
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/*  Logo  */}
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:pr-8">
          <div className="flex w-20 justify-center pt-4 relative z-50">
            <Owl theme="light" />
          </div>
          <div className="flex flex-col text-center justify-center z-10 text-slate-200 font-bold">
            <span className="text-xl tracking-widest text-slate-200">Grateful</span>
            <span className="text-xs tracking-widest uppercase text-slate-200 font-bold">
              Web Designs
            </span>
          </div>
        </div>
        {/*  Menus Container  */}
        <div className="flex flex-col space-y-12 md:space-x-48 md:flex-row md:space-y-0">
          {/*  Menu 1  */}
          <div className="flex flex-col items-center w-full md:items-start group">
            <div className="mb-5 font-bold text-white capitalize">Menu</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Home
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/services"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Services
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/portfolio"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Portfolio
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/blog"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/about"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/contact"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Contact
              </Link>
            </div>
          </div>
          {/*  Menu 2  */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Services</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#web-development"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Web Development
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#web-design"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Web Design
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#digital-marketing"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Digital Marketing
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#on-demand"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                On-Demand
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#support"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Support
              </AnchorLink>
            </div>
          </div>
          {/*  Menu 3  */}
          {/* <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Site Map</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                About
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Our team
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Careers
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/"
                className="capitalize text-neutral-200 mb-1 hover:text-teal-400"
              >
                Contact
              </a>
            </div>
          </div> */}
        </div>
        {/*  Social Container 
         @TODO: Add hue-rotate elements that match theme colors: https://codepen.io/sosuke/pen/Pjoqqp */}
        <div className="flex flex-col items-center space-y-4 md:items-start pl-4">
          {/* <div className="flex space-x-6">
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
          </div> */}
          <div className="text-center md:text-left text-neutral-200">
            <p>© {new Date().getFullYear()} Grateful Web Designs</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
