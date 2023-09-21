import React from 'react'
import InfiniteEdits from '../images/svg/infinite-edits.svg'
import WebDevelopment from '../images/svg/web-development.svg'
import Hosting from '../images/svg/hosting.svg'
import Contact from '../images/svg/contact.svg'


const featureList = [
  {
    title: 'Unlimited Edits',
    description:
      'If your products or services have changed, you can request any revisions to existing features or copy at anytime, at no extra cost.',
    image: <InfiniteEdits />,
    reverse: false,
  },
  {
    title: 'Web Design & Development',
    description:
      'Professional web designs created in-house. We build a completely custom website for you. Absolutely no repetitive page builders.',
    image: <WebDevelopment />,
    reverse: true,
  },
  {
    title: 'Hosting Management',
    description:
      'Hosting maintenance is built into your subscription. Once your website is completed, we will keep it up and running while you focus on your business.',
    image: <Hosting />,
    reverse: false,
  },
  {
    title: 'Human Customer Service',
    description: 'Contact us anytime and communicate with a real person.',
    image: <Contact />,
    reverse: true,
  },
]

const Feature = ({ title, description, image, reverse }) => (
  <div
    className={`flex flex-col items-center justify-between text-center mb-24 lg:mb-36 lg:text-left lg:w-3/4 ${
      reverse ? 'lg:flex-row-reverse lg:text-right' : 'lg:flex-row'
    }`}
  >
    <div>
      <h4 className="font-bold text-2xl mb-3 text-gray-700">{title}</h4>
      <p className="mx-auto max-w-md lg:max-w-md">
        {description}
      </p>
    </div>
    <div className="w-60 mt-6 mx-0 lg:mt-0">{image}</div>
  </div>
)

export default function HorizontalFeatureImage() {
  return (
    <section>
      <div className="flex flex-col justify-between items-center max-w-6xl mx-auto mt-32 px-10">
        {featureList.map((item, index) => (
          <Feature
            title={item.title}
            description={item.description}
            image={item.image}
            key={index}
            reverse={item.reverse}
          />
        ))}
      </div>
    </section>
  )
}
