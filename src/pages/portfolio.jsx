import * as React from 'react'
import Layout from '../components/Layout'
import elite from '../images/elite-device-mockup.png'

const PortfolioPage = () => {
  return (
    <Layout>
      <section className="pt-36 mb-20 p-6 mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">Our Work</h1>
        <div>
          <div className="">
            <img
              src={elite}
              alt="Graffiti Alley"
              className="md:w-9/12 lg:w-3/5 h-full"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Elite Dialysis Service Ltd.
          </h2>
          <p className="text-xl mb-4">May Pen, Jamaica</p>
          <p className="max-w-md">
            Elite Dialysis is a medical center situated in the heart of Jamaica,
            offering a wide range of care to patients across the Caribbean.
          </p>
          <a
            href="https://elitedialysisltd.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-6 inline-block mx-auto self-end bg-efferBlue font-bold text-white rounded-lg px-6 py-2">
              Visit Elite
            </button>
          </a>
        </div>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default PortfolioPage
