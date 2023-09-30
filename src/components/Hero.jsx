import React from 'react'
import DevAstronaut from '../images/svg/dev-astronaut.js'
import Button from './Button.jsx'
import { Link } from 'gatsby'

export default function Hero() {
  return (
    <section className="relative bg-efferBlue topography-gradient" id="hero">
      {/* https://heropatterns.com/ */}

      <div className="max-w-6xl flex flex-col-reverse mx-auto p-10 pt-0 lg:flex-row lg:py-16">
        {/*  Content Container  */}
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-slate-200 text-3xl md:text-5xl text-center lg:text-6xl lg:text-left">
            Supercharge your digital presence
          </h1>
          <p className="text-md md:text-xl text-center text-slate-300 lg:max-w-md lg:text-left lg:leading-10">
            Blazing-fast, custom-built, modern websites for businesses,
            entrepreneurs & professionals. Designed to inspire.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link to="/contact">
              <Button order="primary">Contact Us</Button>
            </Link>
          </div>
        </div>
        {/*  Image  */}
        <div className="pt-24 mb-12 mx-auto w-3/5 sm:w-2/5 lg:mt-12 lg:mr-0 lg:mx-0 lg:ml-28 lg:w-2/5 lg:mb-0 lg:pt-0">
          <DevAstronaut />
        </div>
      </div>
    </section>
  )
}
