import * as React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

const ServicesPage = () => {
  return (
    <Layout>
      <section className="pt-36 mb-20 p-6 mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">
          Our Services
        </h1>
        <h2 className='text-2xl font-bold mb-4 mt-16'>Web Development (add page speed service, google my business, hosting maintainence, unlimited edits for retained clients)</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur ez pz lorem squeezy. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eaque delectus. Voluptatem quis impedit hic ratione despacito ut quas dolorem cupiditate. Incidunt? 
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Low rem, ipsum.
          Expedita earum in REM itaque suscipit, sequi incidunt?
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem, ipsum.
          Expedita earum in rem eligendi ipsum itaque suscipit, sequi incidunt? <Link><b>LEARN MORE</b></Link>
        </p>
        
        <h2 className='text-2xl font-bold mb-4 mt-16'>Web Design</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nihil corporis placeat??
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem, ipsum.
          Expedita earum in rem eligendi ipsum itaque suscipit, sequi incidunt? <Link><b>LEARN MORE</b></Link>
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-16'>Digital Marketing</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque obcaecati est, quam facere quis maxime magni quaerat voluptates voluptatibus accusamus quo itaque odit ipsa doloribus eligendi aliquid corporis nobis. Reprehenderit quaerat accusantium provident dolores asperiores molestias. Accusamus, corporis quis! Expedita earum in rem eligendi ipsum itaque suscipit, sequi incidunt? <Link><b>LEARN MORE</b></Link>
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-16'>Client Asset Support</h2>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
          maxime cumque nesciunt in ad eveniet vero. Impedit, nemo. Lorem, ipsum.
          Expedita earum in rem eligendi ipsum itaque suscipit, sequi incidunt? <Link><b>LEARN MORE</b></Link>
        </p>

      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default ServicesPage
