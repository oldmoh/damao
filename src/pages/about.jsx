import React from 'react'
import { graphql } from 'gatsby'

import { Jumbotron } from 'react-bootstrap'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import style from './about.module.scss'

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="關於" />
      <Jumbotron className={style.about}>
        <h1>關於</h1>
        <p>{data.about.content}</p>
      </Jumbotron>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    about: strapiAboutMe {
      content
      published_at
    }
  }
`
