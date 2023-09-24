import * as React from 'react'
import Layout from '../components/Layout'

const ContactPage = () => {
  return (
    <Layout>
      <section className="pt-36 mb-20 p-6 mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">Reach Out</h1>
        <h2 className="text-2xl font-bold mb-4 mt-16">Let's Work Together</h2>
        <form className='mb-10 mt-6' action="">
          <input className="h-12 border-2 border-zinc-400 rounded-lg p-2" type="text" placeholder="Entire Form lol"/>
        </form>
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
          incidunt?
        </p>

       
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default ContactPage
