import * as React from 'react'
import Layout from '../components/Layout.jsx'
import Hero from '../components/Hero.jsx'
import OffsetImageText from '../components/OffsetImageText.jsx'
import ThreeIconFeatures from '../components/ThreeIconFeatures.jsx'
import PitchIconDescription from '../components/PitchIconDescription.jsx'
import HorizontalFeatureImage from '../components/HorizontalFeatureImage.jsx'
import BannerCTA from '../components/BannerCTA.jsx'
import PricingMatrix from '../components/PricingMatrix.jsx'

// @TODO: Reusable components: Change all these components to use props. This will keep our code dry by importing each variation to pages, with data imports
// @TODO: Gatsby Image optimization SOLUTION: https://www.youtube.com/watch?v=dJ1EslHwXu0&ab_channel=Gatsby
// @DONE: REDDIT BOOKMARK FOR i8n/Configure npm reading-time if needed- https://github.com/search?q=repo%3Acontentful%2Fstarter-gatsby-blog%20publishDate&type=code
// @TODO: Perfect typography/colors via theming/tailwind-config.ts
// @TODO: Dark Mode via TailwindCSS
// @TODO: Animations

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <OffsetImageText />
      <ThreeIconFeatures />
      <PitchIconDescription />
      <HorizontalFeatureImage />
      <BannerCTA />
      <PricingMatrix />
    </Layout>
  )
}

export default IndexPage
