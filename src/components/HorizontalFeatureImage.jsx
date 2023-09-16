import React from 'react'
import Owl from '../images/svg/owl'

// @TODO: separate featureList by `space-y-6, not various margin values

const featureList = [
  {
    title: 'Unlimited Edits',
    description:
      'If your products or services have changed, you can request any revisions to existing features or copy at anytime, at no extra cost.',
    image: <Owl />,
    reverse: false,
  },
  {
    title: 'Web Design & Development',
    description:
      'Professional web designs created in-house. We build a completely custom website for you. Absolutely no automated page builders.',
    image: <Owl />,
    reverse: true,
  },
  {
    title: 'Hosting Management',
    description:
      'Hosting maintenence are built into your subscription. Once your website is completed, we will keep it up and running while you focus on your business.Hosting maintenence are built into your subscription. Once your website is completed, we will keep it up and running while you focus on your business.',
    image: <Owl />,
    reverse: false,
  },
  {
    title: 'Human Customer Service',
    description: 'Contact us anytime and communicate with real humans.',
    image: <Owl />,
    reverse: true,
  },
]

const Feature = ({ title, description, image, reverse }) => (
  <div className="">
    <div
      className={`${reverse} ? 'lg:flex-row-reverse' : '' flex flex-col items-center text-center mb-24 lg:flex-row lg:space-x-24`}
    >
      <div>
        <h4 className="font-bold text-2xl mb-3">{title}</h4>
        <p className="mx-auto max-w-md lg:max-w-xs text-gray-500 leading-7">
          {description}
        </p>
      </div>
      <div className="w-20 mt-6">{image}</div>
    </div>
  </div>
)

export default function HorizontalFeatureImage() {
  return (
    <section>
      <div className="flex flex-col justify-between items-center max-w-6xl mx-auto mt-32 px-10">
        {featureList.map((item, i) => (
          <Feature
            title={item.title}
            description={item.description}
            image={item.image}
            key={i}
            // reverse={reverse}
          />
        ))}
      </div>
    </section>
  )
}
