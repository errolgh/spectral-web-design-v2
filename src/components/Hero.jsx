import React from 'react'
import DevAstronaut from '../images/svg/dev-astronaut.js'
import Button from './Button.jsx'
import { Link } from 'gatsby'
import Wave from '../images/svg/hero-wave.svg'

export default function Hero() {
  // @TODO: ADD BLOB WITH THISSSS https://www.youtube.com/watch?v=lPJVi797Uy0&ab_channel=Fireship
  return (
    // <!-- Hero Section -->
    <section className="relative bg-efferBlue" id="hero">
      {/* <Wave className="hero-wave"/> */}
      {/* <div className="hero-wave"></div> */}
      {/* <!-- Hero Container --> */}
      <div className="max-w-6xl flex flex-col-reverse mx-auto p-10 lg:flex-row lg:pt-36">
        {/* <!-- Content Container --> */}
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-slate-200 text-4xl md:text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Supercharge your digital presence
          </h1>
          <p className="text-lg md:text-2xl text-center text-slate-300 lg:max-w-md lg:text-left">
            Blazing-fast, custom-built, modern websites for businesses,
            entrepreneurs & professionals. Designed to inspire.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link to="/contact">
              <Button order="primary">Contact Us</Button>
            </Link>
          </div>
        </div>
        {/* <!-- Image --> */}
        <div className="pt-24 mb-12 relative mx-auto w-3/5 sm:w-2/5 lg:mt-12 lg:mr-0 lg:mx-0 lg:ml-28 lg:w-2/5 lg:mb-0 lg:pt-0">
          <DevAstronaut />
        </div>
      </div>
    </section>
  )
}
