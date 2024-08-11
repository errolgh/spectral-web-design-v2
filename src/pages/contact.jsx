import * as React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm/'

const ContactPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

// Step 3: Export your component
export default ContactPage

export const Head = () => (
  <>
    <title>Grateful Web Designs | Contact</title>
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
