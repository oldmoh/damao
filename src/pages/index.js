import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import { Carousel } from 'react-bootstrap'
import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import PostCard from '../components/card.jsx'
import style from './index.module.scss'

const HomeIndex = ({ data }) => {
  const posts = data.allStrapiPost.nodes.map(post => <PostCard key={post.slug} {...post} />)

  const carouselItems = data.strapiIndex.images.map((image) => (
    <Carousel.Item key={image.name}>
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        alt={image.alternativeText}
      />
      <Carousel.Caption>
        <h3>{image.caption}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ))

  return (
    <Layout>
      <SEO title={data.strapiIndex.site_name} />

      <div className={style.content}>
        <Carousel className="mt-4 mb-5">
          {carouselItems}
        </Carousel>

        <section className="mt-4 mb-5">
          <h2>Posts</h2>
          <hr></hr>
          {posts}
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
{
 strapiIndex {
      site_name
      images {
        name
        caption
        alternativeText
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  allStrapiPost(sort: {order: DESC, fields: created_at}) {
    nodes {
      created_at(locale: "")
      slug
      title
      preface
    }
  }
}
`
