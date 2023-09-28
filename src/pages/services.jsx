import * as React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const ServicesPage = () => {
  return (
    <Layout>
      <section className="pt-36 mb-20 p-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">Our Services</h1>
        <h2 className="text-2xl font-bold mb-4 mt-16">Web Development</h2>
        <p className="mb-6">
          Hours of web development using our proprietary library of functional
          features and creation of unique page elements including your unique
          branding, media, blogging, and ecommerce. dev team with years of
          experience. Standard websites, websites with blogs, and ecommerce
          integrations through Shopify and Square.
        </p>
        <p className="mb-6">
          Google page speed improvements (image), google my business
          optimization, hosting and server maintainence
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Web Design</h2>
        <p className="mb-6">
          At Spectral Web Designs, we take pride in our commitment to crafting
          contemporary and modern web designs, stunning graphics, and compelling
          logos that align perfectly with your brand's vision. We understand the
          importance of creating a visually appealing and user-friendly online
          presence, as well as eye-catching visuals that make a lasting
          impression. To ensure your complete satisfaction, we offer multiple
          rounds of design iterations for all our services, allowing us to
          fine-tune every detail until you're thrilled with the result. Our goal
          is to provide you with a comprehensive design package that not only
          meets your expectations but also showcases your unique identity
          effectively. We encourage collaboration throughout the design process
          to achieve the best outcome while maintaining a focus on delivering
          value and excellence.
        </p>
        <Link>
          <b>M. Arthur</b>
        </Link>

        <h2 className="text-2xl font-bold mb-4 mt-16">
          Digital Marketing & Creative Content
        </h2>
        <p className="mb-6">
          Our approach to digital marketing is multifaceted, tailored to cater
          to diverse stakeholder needs. From strategically crafted Google Ads
          and Media Ads campaigns that maximize your online visibility and
          engagement to precisely targeted PPC ads that drive conversions, we
          leverage a comprehensive array of tools to achieve your goals.
          Additionally, our skilled content writing team ensures that our
          blog-tier stakeholders receive valuable, informative, and engaging
          content that not only resonates with their audience but also enhances
          their digital presence and authority. We're committed to delivering
          results that truly matter to all our stakeholders in the digital
          marketing realm.
        </p>
        <Link>
          <b>M. Arthur</b>
        </Link>

        <h2 className="text-2xl font-bold mb-4 mt-16">On-Demand</h2>
        <p className="mb-6">
          We offer on-demand, freelance web development services tailored to
          your specific needs. Whether you have an existing project that
          requires additional expertise or a custom web development task, our
          skilled professionals are ready to assist you on an hourly basis. Our
          flexible freelance model ensures that you can access our expertise
          without any commitment to our development platform, making it easy to
          collaborate on your unique web projects while maintaining full control
          over your development choices.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Stakeholder Support</h2>
        <p className="mb-6">
          Stakeholder support is the bedrock of our mission at Spectral Web
          Designs. We prioritize open and transparent communication with all
          stakeholders, ensuring that their voices are heard, needs are met, and
          expectations exceeded. Through strong partnerships and a deep
          commitment to understanding and addressing stakeholder concerns, we
          foster a collaborative environment that drives our shared success.
        </p>
        <Link>
          <b>Reach out</b>
        </Link>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default ServicesPage
