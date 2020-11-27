import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo.jsx'
import Layout from '../components/layout'
import Animation from '../components/animation'
import style from './about.module.scss'

const About = ({ data }) => {
  const { about } = data
  const [show, setShow] = useState(false)
  const activities = about.timeline.activities
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .map((item, index) => {
      return (
        <Animation key={index} delay={(index + 1) * 200} play={show}>
          <p className={style.activity}>
            {item.time}-{item.activity}
          </p>
        </Animation>
      )
    })

  useEffect(() => setShow(true), [])

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
            <Animation play={show}>
              <p className={style.activity}>
                <strong>Now</strong>
              </p>
            </Animation>

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
