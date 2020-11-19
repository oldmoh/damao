import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { Badge } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import style from './post.module.scss'

const Post = ({ pageContext, ...data }) => {
  const badges = pageContext.tags.map((tag) => (
    <Badge
      key={tag.slug}
      className={classNames(style.badge, 'mx-1', 'px-2', 'py-1')}
    >
      <Link to={`/tag/${tag.slug}`} className={style.badgeLink}>
        #{tag.name}
      </Link>
    </Badge>
  ))

  return (
    <Layout>
      <SEO
        title={pageContext.title}
        description={pageContext.preface}
        isArticle={true}
      />
      <div className={classNames(style.post)}>
        <article className={style.article}>
          <h1 className={classNames(style.title, 'mt-4', 'mb-0')}>
            {pageContext.title}
          </h1>
          <div className={style.subtitle}>
            <p>{new Date(pageContext.created_at).toDateString()}</p>
            <span></span>
            <p>{pageContext.category.name}</p>
          </div>
          <div className={style.conent}>
            <p>{pageContext.preface}</p>
            <ReactMarkdown
              className={style.markdown}
              plugins={[gfm]}
              children={pageContext.content}
            />
          </div>
          <hr className={style.divider} />
          <div className={style.tags}>{badges}</div>
        </article>
      </div>
    </Layout>
  )
}

export default Post
