import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout.jsx'
import Button from '../components/Button.jsx'

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="mb-14">Page Not Found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/"><Button order="primary">Go Home</Button></Link>
        </p>
      </section>
    </Layout>
  )
}

export default NotFoundPage
