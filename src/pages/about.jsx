import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import style from './about.module.scss'

const About = ({ data }) => {
  const { about } = data
  const activities = about.timeline.activities
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .map((item, index) => {
      return (
        <p key={index} className={style.activity}>
          {item.time}-{item.activity}
        </p>
      )
    })

  return (
    <Layout>
      <SEO title="關於" description={about.about_site} />
      <div className={style.about}>
        <div className={style.container}>
          <h2>關於大貓日誌</h2>
          <p>{about.about_site}</p>
        </div>
        <div className={style.container}>
          <h2>關於大貓</h2>
          <p>{about.about_me}</p>
        </div>
        <div className={style.container}>
          <h2>時間軸</h2>
          <div className={style.timeline}>
            <p className={style.activity}>
              <strong>Now</strong>
            </p>
            {activities}
          </div>
        </div>
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
      timeline {
        activities {
          activity
          time
        }
      }
    }
  }
`
