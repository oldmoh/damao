import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MarkdownImage = ({ sourceImages, clickEvent, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "no-image" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const handleClick = clickEvent ? clickEvent : () => {}
  const image = sourceImages.find((item) => item.url === props.node.url)
  const fluidImage = image
    ? image.localFile.childImageSharp.fluid
    : data.file.childImageSharp.fluid

  return (
    <Img fluid={fluidImage} alt={props.node.alt} title={props.node.title} />
  )
}

export default MarkdownImage
