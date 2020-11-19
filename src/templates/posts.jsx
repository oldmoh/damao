import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import PostCard from '../components/card.jsx'
import style from './posts.module.scss'

const Posts = ({ pageContext, ...param }) => {
  const posts = pageContext.posts.map((post) => (
    <PostCard key={post.slug} {...post} />
  ))

  return (
    <Layout>
      <SEO title={pageContext.name} />
      <div className={style.content}>
        <section className="mt-4 mb-5">
          <h2>{pageContext.name} - Posts</h2>
          <hr></hr>
          {posts}
        </section>
      </div>
    </Layout>
  )
}

export default Posts
