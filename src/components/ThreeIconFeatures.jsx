import React from 'react'
import Devices from '../images/svg/devices.svg'
import ThreeUpArrows from '../images/svg/three_up_arrows.svg'
import Nerd from '../images/svg/nerd.svg'

// @TODO: Convert svgs to React Components

export default function ThreeIconFeatures() {
  return (
    <section id="three-features">
      <div className="container max-w-6xl mx-auto flex flex-col mt-12 space-y-10 text-center px-10 text-gray-700 md:space-y-16 md:mt-32 lg:mt-40 lg:flex-row lg:space-y-0 lg:space-x-20">
        {/* Item 1 */}
        <div className="mx-auto">
          <div className="mx-auto w-16">
            <Devices />
          </div>
          <h3 className="font-bold text-2xl mt-6 mb-3">
            Mobile-Responsive Design
          </h3>
          <p className="mx-auto max-w-md lg:max-w-xs text-gray-500 leading-7">
            We'll make your web presence look great on desktop, mobile devices,
            and everything in between.
          </p>
        </div>

        {/* Item 2 */}
        <div className="mx-auto">
          <div className="mx-auto w-16">
            <ThreeUpArrows />
          </div>
          <h3 className="font-bold text-2xl mt-6 mb-3">
            On-Page SEO Performance
          </h3>
          <p className="mx-auto max-w-md lg:max-w-xs text-gray-500 leading-7">
            We optimize website load times, accessibility, SEO-keywords, and
            performance— the metrics Google uses to determine your position in
            search results.
          </p>
        </div>

        {/* Item 3 */}
        <div className="mx-auto">
          <div className="mx-auto w-16">
            <Nerd />
          </div>
          <h3 className="font-bold text-2xl mt-6 mb-3">
            Website Maintenance
          </h3>
          <p className="mx-auto max-w-md lg:max-w-xs text-gray-500 leading-7">
            Leave domain, hosting, and encryption to your techology
            professionals. Focus on running your business and leave the nerdy
            stuff to us!
          </p>
        </div>
      </div>
    </section>
  )
}
