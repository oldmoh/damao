import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import style from './archives.module.scss'

const Archives = ({ data }) => {
  const activities = data.allStrapiPost.nodes.map((item, index) => {
    return (
      <div key={index} className={style.activity}>
        <Link to={`/post/${item.slug}`}>
          <p>{new Date(item.created_at).toISOString().split('T')[0]}</p>
          <p>{item.title}</p>
        </Link>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="歸檔" />
      <div className={style.archives}>
        <div className={style.container}>
          <h2>歸檔</h2>
          <div className={style.timeline}>
            <div className={style.activity}>
              <p>
                <strong>Now</strong>
              </p>
            </div>
            {activities}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Archives

export const query = graphql`
  {
    allStrapiPost(sort: { fields: created_at, order: DESC }) {
      nodes {
        created_at
        title
        slug
      }
    }
  }
`
