import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout.jsx'

const NotFoundPage = () => {
  return (
    <Layout>
      <main className='pt-32 m-6'>
        <h1 className='text-2xl font-bold mb-6'>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code> (this page shows in gatsby develop only).
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
