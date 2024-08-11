import * as React from 'react';
import Layout from '../components/Layout.jsx';
import Hero from '../components/Hero.jsx';
import OffsetImageText from '../components/OffsetImageText.jsx';
import ThreeIconFeatures from '../components/ThreeIconFeatures.jsx';
import PitchIconDescription from '../components/PitchIconDescription.jsx';
import HorizontalFeatureImage from '../components/HorizontalFeatureImage.jsx';
import BannerCTA from '../components/BannerCTA.jsx';
import PricingMatrix from '../components/PricingMatrix.jsx';

// @TODO: Reusable components: Change all these components to use props. This will keep our code dry by importing each variation to pages, with data imports
// @TODO: Gatsby Image optimization SOLUTION: https://www.youtube.com/watch?v=dJ1EslHwXu0&ab_channel=Gatsby
// @DONE: REDDIT BOOKMARK FOR i8n/Configure npm reading-time if needed- https://github.com/search?q=repo%3Acontentful%2Fstarter-gatsby-blog%20publishDate&type=code
// @TODO: Perfect typography/colors via theming/tailwind-config.ts
// @TODO: Dark Mode via TailwindCSS
// @TODO: On-Scroll Animations

// @TODO: Add tailwind x prettier plugin --dev
// @FIXME: just a reminder this highlighting exists on my vscode :)

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
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Grateful Web Designs | Home</title>
    <link rel="icon" href="/src/images/svg/owl.png"></link>
    <meta charSet="utf-8" />
    <meta
      name="description"
      content="Supercharge your digital presence. Blazing-fast, custom-built, modern websites for businesses, entrepreneurs & professionals."
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta
      name="theme-color"
      content="#000000"
      media="(prefers-color-scheme: dark)"
    />
  </>
);
