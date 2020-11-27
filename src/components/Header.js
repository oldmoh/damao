import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import classnames from 'classnames'

import { Nav } from 'react-bootstrap'
import style from './Header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiProfile {
        name
        description
        profile {
          name
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      allStrapiCategory {
        nodes {
          name
          slug
        }
      }
    }
  `)

  const navItems = data.allStrapiCategory.nodes.map((node) => (
    <Nav.Item key={node.slug}>
      <Link
        className={classnames('nav-link p-2', style.link)}
        to={`/category/${node.slug}`}
      >
        {node.name}
      </Link>
    </Nav.Item>
  ))

  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Img
          className={classnames(style.profile, 'mb-3')}
          fixed={data.strapiProfile.profile.childImageSharp.fixed}
          alt="my profile"
        />
        <div className={classnames(style.description)}>
          <strong>{data.strapiProfile.name}</strong>
          <p>{data.strapiProfile.description}</p>
        </div>
      </div>
      <Nav className="">
        <Nav.Item key="index">
          <Link className={classnames('nav-link p-2', style.link)} to="/">
            Home
          </Link>
        </Nav.Item>
        {navItems}
        <Nav.Item key="about">
          <Link className={classnames('nav-link p-2', style.link)} to="/about">
            關於
          </Link>
        </Nav.Item>
        <Nav.Item key="tags">
          <Link className={classnames('nav-link p-2', style.link)} to="/tags">
            標籤
          </Link>
        </Nav.Item>
        <Nav.Item key="archives">
          <Link
            className={classnames('nav-link p-2', style.link)}
            to="/archives"
          >
            歸檔
          </Link>
        </Nav.Item>
        <Nav.Item key="search">
          <Link
            className={classnames('nav-link p-2', style.link)}
            to="/processing"
          >
            搜尋
          </Link>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header
