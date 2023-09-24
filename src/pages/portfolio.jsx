import * as React from 'react'
import Layout from '../components/Layout'

const PortfolioPage = () => {
  return (
    <Layout>
      <section className="pt-36 mb-20 p-6 mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">Our Work</h1>
        <p>Grid prolly tbh.</p>
        <div className='mt-6'>
          <h2>This could be you!</h2>
        </div>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default PortfolioPage
