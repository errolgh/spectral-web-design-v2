import React from 'react'
import Owl from '../images/svg/owl'

const featureList = [
  {
    title: 'Unlimited Edits',
    description:
      'If your products or services have changed, you can request any revisions to existing features or copy at anytime, at no extra cost.',
    image: <Owl />,
  },
]

const Feature = ({ title, description, image }) => (
  <div className="flex flex-col justify-between items-center mt-32">
    <div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="w-20">{image}</div>
    </div>
  </div>
)

export default function HorizontalFeatureImage() {
  return (
    <section>
      {featureList.map((item, i) => (
        <Feature
          title={item.title}
          description={item.description}
          image={item.image}
          key={i}
        />
      ))}
    </section>
  )
}
