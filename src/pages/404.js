import React from 'react'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <div>
      <h1 className="m-4 text-center">
        NOT FOUND
        <span role="img" aria-label="stop">
          🚧
        </span>
      </h1>
      <p className="m-2 text-center">來到了不存在的路徑... 哭哭.</p>
      <p className="m-2 text-center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
