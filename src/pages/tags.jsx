import React from 'react'
import { graphql, Link } from 'gatsby'
import classNames from 'classnames'
import { Badge } from 'react-bootstrap'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import style from './tags.module.scss'

const Tags = ({ data }) => {
  const badges = data.tags.nodes.map((tag) => (
    <Badge
      key={tag.slug}
      className={classNames('m-1', 'px-2', 'py-1', style.badge)}
    >
      <Link to={`/tag/${tag.slug}`} className={style.badgeLink}>
        #{tag.name}
      </Link>
    </Badge>
  ))

  return (
    <Layout>
      <SEO title="標籤" />
      <div className={classNames(style.container)}>
        <h1>標籤</h1>
        <p>目前共有{data.tags.totalCount}個標籤</p>
        <div className={style.tags}>{badges}</div>
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  {
    tags: allStrapiTag {
      nodes {
        slug
        name
      }
      totalCount
    }
  }
`
