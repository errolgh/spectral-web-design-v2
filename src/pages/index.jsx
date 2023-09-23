import * as React from 'react'
import Layout from '../components/Layout.jsx'
import Hero from '../components/Hero.jsx'
import OffsetImageText from '../components/OffsetImageText.jsx'
import ThreeIconFeatures from '../components/ThreeIconFeatures.jsx'
import PitchIconDescription from '../components/PitchIconDescription.jsx'
import HorizontalFeatureImage from '../components/HorizontalFeatureImage.jsx'
import BannerCTA from '../components/BannerCTA.jsx'
import PricingMatrix from '../components/PricingMatrix.jsx'

// @TODO: Change all these components with props so we can keep our code dry by importing variations to pages, not components-- data objects and files
// @TODO: Should all /images go to /static? and should I use the <Img /> gatsby component for images?
// @TODO: Configure npm reading-time - https://github.com/search?q=repo%3Acontentful%2Fstarter-gatsby-blog%20publishDate&type=code

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
