import * as React from 'react';
import Layout from '../components/Layout';

const ServicesPage = () => {
  return (
    <Layout>
      <section className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="mb-14">Our Services</h1>
        <h2 id="web-development" className="mb-4 mt-16">
          Web Development
        </h2>
        <p className="mb-6">
          We've invested countless hours in web development, using our
          proprietary features to create unique pages that reflect your
          distinctive brand. Whether it's crafting standard websites, blogs, or
          seamless e-commerce solutions through Shopify and Square, our
          experienced team ensures a top-tier online presence for your business.
        </p>

        <h2 id="web-design" className="mb-4 mt-16">
          Web Design
        </h2>
        <p className="mb-6">
          At Grateful Web Designs, we take pride in our commitment to crafting
          contemporary and modern web designs, that align perfectly with your
          brand. We understand the importance of creating a visually appealing
          and user-friendly online presence, as well as eye-catching visuals
          that make a lasting impression. To ensure your complete satisfaction,
          we offer multiple rounds of design iterations for all our services,
          allowing us to fine-tune every detail until you're thrilled with the
          result.
        </p>
        <p>
          Our goal is to provide you with a comprehensive design package that
          not only meets your expectations but also showcases your unique
          identity effectively. We encourage collaboration throughout the design
          process to achieve the best outcome while maintaining a focus on
          delivering value and excellence.
        </p>

        <h2 id="digital-marketing" className="mb-4 mt-16">
          Digital Visibility
        </h2>
        <p className="mb-6">
          Our approach to digital marketing is multifaceted, tailored to cater
          to diverse stakeholder needs. We offer Google Analytics insights, Page
          Speed audits, and expert hosting and server maintenance services to
          keep your digital presence at its best, ranking on Google, and ultimately getting in front of more customers.
        </p>

        <h2 id="on-demand" className="mb-4 mt-16">
          On-Demand
        </h2>
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

        <h2 id="support" className="mb-4 mt-16">
          Stakeholder Support
        </h2>
        <p className="mb-6">
          Stakeholder support is the bedrock of our mission at Grateful Web
          Designs. We prioritize open and transparent communication with all
          stakeholders, ensuring that their voices are heard, needs are met, and
          expectations exceeded. Through strong partnerships and a deep
          commitment to understanding and addressing stakeholder concerns, we
          foster a collaborative environment that drives our shared success.
        </p>
        <a href="/contact">
          <button>
            <b>Reach out today</b>
          </button>
        </a>
      </section>
    </Layout>
  );
};

// Step 3: Export your component
export default ServicesPage;

export const Head = () => (
  <>
    <title>Grateful Web Designs | Services</title>
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
