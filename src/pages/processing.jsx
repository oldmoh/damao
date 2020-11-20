import React from 'react'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'

const ProcessingPage = () => (
  <Layout>
    <SEO title="開發中" />
    <div>
      <h1 className="m-4 text-center">
        Oops
        <span role="img" aria-label="stop">
          🚧🚧🚧
        </span>
      </h1>
      <p className="m-2 text-center">
        努力開發中...
        <span role="img" aria-label="coding">
          👨‍💻👨‍💻👨‍💻
        </span>
      </p>
      <p className="m-2 text-center">
        Developing...
        <span role="img" aria-label="coding">
          👨‍💻👨‍💻👨‍💻
        </span>
      </p>
    </div>
  </Layout>
)

export default ProcessingPage
