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
          contemporary and modern web designs that align perfectly with your
          brand's vision. We understand the importance of <creati></creati>ng a
          visually appealing and user-friendly online presence. To ensure your
          complete satisfaction, we offer multiple rounds of design iterations,
          allowing us to fine-tune every detail until you're thrilled with the
          result. Our goal is to provide you with a website that not only meets
          your expectations but also showcases your unique identity effectively.
          We encourage collaboration throughout the design process to achieve
          the best outcome while maintaining a focus on delivering value and
          excellence. We also provide graphic design and logos.
        </p>
        <Link>
          <b>M. Arthur</b>
        </Link>

        <h2 className="text-2xl font-bold mb-4 mt-16">Digital Marketing</h2>
        <p className="mb-6">
          Google Ads, Meda ads, PPC ads. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sit atque maxime cumque nesciunt in ad eveniet vero.
          Impedit, nemo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quos doloremque obcaecati est, quam facere quis maxime magni
          quaerat voluptates voluptatibus accusamus quo itaque odit ipsa
          doloribus eligendi aliquid corporis nobis. Reprehenderit quaerat
          accusantium provident dolores asperiores molestias. Accusamus,
          corporis quis! Expedita earum in rem eligendi ipsum itaque suscipit,
          sequi incidunt?
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem,
          ipsum. Expedita earum in rem eligendi ipsum itaque suscipit, sequi
          incidunt?{' '}
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
