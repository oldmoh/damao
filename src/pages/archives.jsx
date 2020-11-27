import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import Animation from '../components/animation'
import style from './archives.module.scss'

const Archives = ({ data }) => {
  const [show, setShow] = useState(false)
  const activities = data.allStrapiPost.nodes.map((item, index) => {
    return (
      <Animation key={index} delay={(index + 1) * 200} play={show}>
        <div className={style.activity}>
          <Link to={`/post/${item.slug}`}>
            <p>{new Date(item.created_at).toISOString().split('T')[0]}</p>
            <p>{item.title}</p>
          </Link>
        </div>
      </Animation>
    )
  })

  useEffect(() => setShow(true), [])

  return (
    <Layout>
      <SEO title="歸檔" />
      <div className={style.archives}>
        <div className={style.container}>
          <h2>歸檔</h2>
          <div className={style.timeline}>
            <Animation play={show}>
              <div className={style.activity}>
                <p>
                  <strong>Now</strong>
                </p>
              </div>
            </Animation>
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
