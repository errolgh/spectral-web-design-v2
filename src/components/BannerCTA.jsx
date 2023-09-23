import React from 'react'
import Button from './Button'

// @TODO: Add teal to isBreakOrContinueStatement

export default function BannerCTA() {
  return (
    <section id="cta">
      <div id="cta" className="py-24 bg-gradient-to-r from-efferBlue to-[#1E40AF] w-full">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-gray-50">
            Boost your digital presence today
          </h5>
          <div className="mx-auto">
            <Button className="text-white" order="primary">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
