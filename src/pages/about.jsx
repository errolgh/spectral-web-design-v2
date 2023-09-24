import * as React from 'react'
import Layout from '../components/Layout.jsx'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout>
      <section className="pt-36 mb-20 p-6 mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">About Us</h1>
        <h2 className="text-2xl font-bold mb-4 mt-16">A Passion for Growth</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur ez pz lorem squeezy. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Itaque, eaque delectus.
          Voluptatem quis impedit hic ratione despacito ut quas dolorem
          cupiditate. Incidunt?
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem,
          ipsum. Expedita earum in rem eligendi ipsum itaque suscipit, sequi
          incidunt?{' '}
          <Link>
            <b>LEARN MORE</b>
          </Link>
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Improvement</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Aspernatur nihil
          corporis placeat??
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem,
          ipsum. Expedita earum in rem eligendi ipsum itaque suscipit, sequi
          incidunt?
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Meet Our Team</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quos doloremque obcaecati
          est, quam facere quis maxime magni quaerat voluptates voluptatibus
          accusamus quo itaque odit ipsa doloribus eligendi aliquid corporis
          nobis. Reprehenderit quaerat accusantium provident dolores asperiores
          molestias. Accusamus, corporis quis! Expedita earum in rem eligendi
          ipsum itaque suscipit, sequi incidunt?{' '}
          <Link>
            <b>LEARN MORE</b>
          </Link>
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Our Mission</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur add minus elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem,
          ipsum. Expedita earum in rem eligendi ipsum itaque suscipit, sequi
          incidunt?
        </p>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
