import React, { useEffect, useState } from 'react'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import PostCard from '../components/card.jsx'
import Animation from '../components/animation'
import style from './posts.module.scss'

const Posts = ({ pageContext, ...param }) => {
  const [show, setShow] = useState(false)
  const posts = pageContext.posts.map((post, index) => (
    <Animation key={post.slug} play={show} delay={index * 200}>
      <PostCard {...post} />
    </Animation>
  ))
  useEffect(() => setShow(true), [])

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
