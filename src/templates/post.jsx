import React from 'react'
import classNames from 'classnames'
import { Link, graphql } from 'gatsby'
import { Badge } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import MarkdownImage from '../components/markdownImage'
import ScrollTopButton from '../components/scrollTopButton'
import style from './post.module.scss'

const Post = ({ data }) => {
  let post = data.strapiPost
  const renderers = {
    link: ({ href, children }) => {
      if (href.startsWith('#')) return <Link to={href}>{children}</Link>
      else return <a href={href}>{children}</a>
    },
    heading: ({ node, level, children }) => {
      let id = node.children.reduce(
        (acc, child) =>
          acc + child.value.replace(/ /g, '-').toLocaleLowerCase(),
        ''
      )
      const TagName = `h${level}`
      return <TagName id={id}>{children}</TagName>
    },
    // remove wrapper P tag of images
    paragraph: ({ children, ...props }) => {
      if (
        children.length !== 0 &&
        children.findIndex((item) => item.type.displayName === 'image') !== -1
      )
        return children
      else return <p>{children}</p>
    },
    image: ({ ...props }) => (
      <MarkdownImage sourceImages={post.images} {...props} />
    ),
  }
  const badges = post.tags.map((tag) => (
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
      <SEO title={post.title} description={post.preface} isArticle={true} />
      <div className={classNames(style.post)}>
        <article className={style.article}>
          <h1 className={classNames(style.title, 'mt-4', 'mb-0')}>
            {post.title}
          </h1>
          <div className={style.subtitle}>
            <p>
              發表於 {new Date(post.created_at).toISOString().split('T')[0]}
            </p>
            <p>
              最後修改於 {new Date(post.updated_at).toISOString().split('T')[0]}
            </p>
            <p>分類於 {post.category.name}</p>
          </div>
          <div className={style.conent}>
            <p>{post.preface}</p>
            <ReactMarkdown
              className={style.markdown}
              plugins={[gfm]}
              children={post.content}
              renderers={renderers}
            />
          </div>
          <hr className={style.divider} />
          <div className={style.tags}>{badges}</div>
        </article>
        <ScrollTopButton />
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String) {
    strapiPost(slug: { eq: $slug }) {
      content
      id
      slug
      title
      published_at(locale: "")
      updated_at(locale: "")
      created_at(locale: "")
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      preface
      images {
        caption
        url
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
