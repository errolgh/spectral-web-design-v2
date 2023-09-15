import React from 'react'
import DevAstronaut from '../images/svg/dev-astronaut.js'

export default function Hero() {

  // @TODO: ADD BLOB WITH THISSSS https://www.youtube.com/watch?v=lPJVi797Uy0&ab_channel=Fireship
  return (
    // <!-- Hero Section -->
    <section id="hero">
      {/* <!-- Hero Container --> */}
      <div class="max-w-6xl flex flex-col-reverse mx-auto p-10 lg:flex-row">
        {/* <!-- Content Container --> */}
        <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 class="text-4xl md:text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Supercharge your digital presence
          </h1>
          <p class=" text-lg md:text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Blazing-fast, custom-built, modern websites for businesses,
            entrepreneurs & professionals. Designed to inspire.
          </p>
          <div class="mx-auto lg:mx-0">
            <button
              class="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              href="/"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* <!-- Image --> */}
        <div class="mb-12 relative mx-auto w-full sm:w-3/5 md:w-96 lg:mx-0 lg:ml-24 lg:w-2/5 lg:mb-0">
          <DevAstronaut />
        </div>
      </div>
    </section>
  )
}
