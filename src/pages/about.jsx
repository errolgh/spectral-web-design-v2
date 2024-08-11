import * as React from 'react'
import Layout from '../components/Layout.jsx'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout>
      <section className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="mb-14">
          The Grateful Methodology
        </h1>
        <h2 className="text-2xl font-bold mb-4 mt-16">Our Approach</h2>
        <p className="mb-6">
          We create fast and effective web products. Helping small businesses,
          entrepreneurs, and professionals enhance their endeavors is truly our
          passion, and we're grateful to be able to provide it for those who are
          looking to grow their digital footprint.
        </p>
        <p className="mb-6">
          It's unfair to have to spend thousands of dollars upfront, and even
          more every month thereafter for static websites. It favors most to
          have the type of service that allows them to invest more into creating
          better products and services for their clientele. Grateful Web Designs
          demonstrates a business model that lets you participate on the web at
          a reasonable rate and still provide a custom web presence.
        </p>
        <p className="mb-6">
          Using website builders can negatively affect website performance,
          which search engines, like Google, use to rank you amongst similar
          entities. They often lack the ability to provide optimization tools,
          easy management for the ever-growing number of plugins added as your
          site matures, and offer scarce support without having to spend a
          fortune. Grateful Web Designs builds websites from scratch without
          these bulky 3rd-party ecosystems in order to combat these concerns. We
          additionally include unlimited content and media updates, on-site SEO
          management, and user support as needed to our standard and premium
          partners.
        </p>
        <Link to="/services">
          <b>Our Services</b>
        </Link>

        <h2 className="text-2xl font-bold mb-4 mt-16">Our Team</h2>
        <p className="mb-6">
          We've cultivated a team of specialists who are passionate about
          crafting exceptional digital experiences in their field. Our diverse
          team brings together a wealth of expertise in web development, design,
          and digital marketing. From coding wizards to creative visionaries,
          our crew works seamlessly to bring your concepts to life. We have a team
          committed to transforming your ideas into stunning, functional, and
          user-friendly websites that set your brand apart.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Our Mission</h2>
        <small className="block mb-3 text-lg">
          Empowering Growth through Digital Ascendancy
        </small>
        <p className="mb-6">
          "At Grateful Web Designs, our goal is to revolutionize the digital
          landscape for small businesses, entrepreneurs, and professionals. We
          believe in a unique and effective web presence for all. Our commitment
          to affordable rates, location-independent work, and life design is
          woven into our DNA. We champion a fair and flexible approach, and
          reject limitations in order to propel your business forward. Join us in
          redefining the web experience for the ambitious. Your success is our
          passion, and we're here to make it happen."
        </p>
        {/* <h2>What people have to say</h2>
        <p>Client Testimonials and Success Stories</p>
        <p>Link portfolio</p>
        <h2>Community Involvement and Values</h2> */}
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage

export const Head = () => (
  <>
    <title>Grateful Web Designs | About</title>
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