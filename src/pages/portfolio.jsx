import * as React from 'react';
import Layout from '../components/Layout';
import elite from '../images/elite-device-mockup.png';
import nevermore from '../images/nevermore-device-mockup.png';

const data = [
  {
    title: 'Elite Dialysis Service Ltd.',
    location: 'May Pen, Jamaica',
    description:
      'Elite Dialysis is a medical center situated in the heart of Jamaica, offering a wide range of care to patients across the Caribbean.',
    image: '',
    website: 'https://elitedialysisltd.com/',
  },
  {
    title: 'Nevermore Cleaning & Junk Removal',
    location: 'Baltimore, Maryland',
    description:
      'An affordable junk removal and cleaning company. A trusted, go-to, service operating in Baltimore, MD.',
    image: '',
    website: 'https://letstalknevermore.com/',
  },
];

const PortfolioPage = () => {
  return (
    <Layout>
      <section className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">Our Work</h1>
        <div className="flex gap-x-16">
          <div>
            <div className="">
              <img
                src={nevermore}
                alt="Nevermore Cleaning & Junk Removal"
                className="md:w-9/12 lg:w-3/5"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Nevermore Cleaning & Junk Removal
            </h2>
            <p className="text-xl mb-4">Baltimore, Maryland</p>
            <p className="max-w-md">
              An affordable junk removal and cleaning company. A trusted, go-to,
              service operating in Baltimore, MD.
            </p>
            <a
              href="https://letstalknevermore.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-6 inline-block mx-auto self-end bg-efferBlue font-bold text-white rounded-lg px-6 py-2">
                Visit Nevermore
              </button>
            </a>
          </div>
          <div>
            <div className="">
              <img
                src={elite}
                alt="Elite Dialysis Center"
                className="md:w-9/12 lg:w-3/5"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Elite Dialysis Service Ltd.
            </h2>
            <p className="text-xl mb-4">May Pen, Jamaica</p>
            <p className="max-w-md">
              Elite Dialysis is a medical center situated in the heart of
              Jamaica, offering a wide range of care to patients across the
              Caribbean.
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
        </div>
      </section>
    </Layout>
  );
};

// Step 3: Export your component
export default PortfolioPage;
