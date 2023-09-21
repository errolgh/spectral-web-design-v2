import * as React from 'react'
import Layout from '../components/Layout'

const BlogPage = () => {
  return (
    <Layout>
      <main className="pt-36">
        <div className="mb-16 px-6">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <div className="mb-10">
            <p>
              Hi there! I'm the proud creator of this blog, which I built with
              Gatsby, TailwindCSS and Contentful CMS.
            </p>
          </div>

          {/* https://www.youtube.com/watch?v=p3_xN2Zp1TY&ab_channel=KevinPowell */}
          <div className="main-with-sidebar parent">
            <div className="children mb-6">
              <h2 className="text-2xl mb-4">Main Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nam nisi ducimus soluta unde officiis, maiores labore
                ut dolore porro, eum eligendi exercitationem temporibus esse
                dolorem! Maxime, rem! Dolores, voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nam nisi ducimus soluta unde officiis, maiores labore
                ut dolore porro, eum eligendi exercitationem temporibus esse
                dolorem! Maxime, rem! Dolores, voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nam nisi ducimus soluta unde officiis, maiores labore
                ut dolore porro, eum eligendi exercitationem temporibus esse
                dolorem! Maxime, rem! Dolores, voluptatem?
              </p>
            </div>
            <div className="children">
              <h2 className="text-2xl mb-4">Aside</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi sunt voluptatum deleniti, assumenda autem quos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quo eligendi maxime dolor alias voluptates.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                quas. Repellendus eum illum culpa laboriosam.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

// Step 3: Export your component
export default BlogPage
