import React from 'react'
import Graffiti from '../images/graffiti-alley.webp'
import { Link } from 'gatsby'

// @TODO: consider adding a shadow to each box for depth and reevaluate text box padding-bottom.
// @TODO: could desktop be more centered?.

export default function OffsetImageText({ image }) {
  return (
    <section id="offset-image-text">
      {/*  Feature Container  */}
      <div className="mt-32 relative container flex flex-col max-w-6xl mx-auto my-1 px-10 pt-0 pb-12 md:flex-row md:pb-24 lg:pb-16">
        {/*  Image  */}
        <img
          src={Graffiti}
          alt="Graffiti Alley"
          className="md:w-9/12 lg:w-3/5 md:shadow-2xl"
          loading="lazy"
        />
        {/*  Text Container  */}
        <div className="md:shadow-2xl top-48 pr-0 bg-gray-50 md:absolute md:right-16 lg:right-36 md:px-12 md:py-12 md:pl-12">
          <h2 className="max-w-lg mt-10 mb-6 font-bold text-4xl mx-auto text-center md:text-5xl md:mx-0 md:mt-0 md:text-left">
            What We Do
          </h2>
          <p className="max-w-md mx-auto text-center md:text-left md:mx-0">
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
