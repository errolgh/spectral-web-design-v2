import React from 'react'
import FeatherOpen from '../images/svg/feather-open.svg'

// @TODO: export svgs, or interpolate here, to quickly replace brand colors as needed

export default function PitchIconDescription() {
  return (
    <section
      id="pitch-icon-description"
      className="relative container mx-auto flex flex-col items-center mt-32 text-center lg:mt-56 px-6"
    >
      <FeatherOpen className="absolute -top-52 -left-24 -z-10 scale-100
       rotate-270"/>
      <h2 className="text-4xl font-bold md:text-5xl">How We Make It Happen</h2>

      <div className="gearbox">
        <svg
          className="colored-gear gear"
          xmlns="http://www.w3.org/2000/svg"
          fill="#00315a"
          viewBox="0 0 24 24"
        >
          <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
        </svg>
        <svg
          className="dark-gear gear"
          xmlns="http://www.w3.org/2000/svg"
          fill="#1E40AF"
          viewBox="0 0 24 24"
        >
          <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
        </svg>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 md:text-2xl">
          $0 down. Starting at $149 per month.
        </h3>
        <p className="mx-auto max-w-2xl">
          No money down for a standard website with up to 5 pages. Additional
          features or pages that exceed the scope of work can be achieved in
          custom-tailored packages.
        </p>
      </div>
    </section>
  )
}
