import React from 'react'
import Graffiti from '../images/graffiti-alley.webp'
import { Link } from 'gatsby'

// @TODO: consider adding a shadow to each box for depth and reevaluate text box padding-bottom.
// @TODO: could desktop be more centered?.

export default function OffsetImageText({ image }) {
  return (
    <section id="offset-image-text">
      {/* <!-- Feature Container --> */}
      <div className="mt-32 relative container flex flex-col max-w-6xl mx-auto my-1 p-10 pt-0 text-gray-700 md:flex-row ">
        {/* <!-- Image --> */}
        <img
          src={Graffiti}
          alt="Graffiti Alley"
          className="md:w-9/12 lg:w-3/5"
          loading='lazy'
        />
        {/* <!-- Text Container --> */}
        <div className="top-48 pr-0 bg-gray-50 md:absolute md:right-16 lg:right-36 md:px-12 md:py-12 md:pl-12 md:pb-0">
          <h2 className="max-w-lg mt-10 mb-6 font-bold text-4xl mx-auto text-center md:text-5xl md:mx-0 md:mt-0 md:text-left">
            What We Do
          </h2>
          <p className="max-w-md mx-auto text-center leading-7 md:text-left md:mx-0 text-gray-500">
            We are international web development and design company based in
            Baltimore, MD. Our services cater to small businesses and
            professional individuals who want to grow, and understand that a{' '}
            <em>unique</em> web presence is imperative in this age of
            cookie-cutter, WordPress and Wix sites.{' '}
            <Link to="/contact">
              <b>LEARN MORE</b>
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
