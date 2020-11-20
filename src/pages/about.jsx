import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import style from './about.module.scss'

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="關於" description={data.about.about_site} />
      <div className={style.about}>
        <h2>關於大貓日誌</h2>
        <p>{data.about.about_site}</p>
        <h2>關於大貓</h2>
        <p>{data.about.about_me}</p>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    about: strapiAboutMe {
      about_me
      about_site
    }
  }
`
