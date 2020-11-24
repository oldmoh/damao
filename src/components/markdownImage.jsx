import React from 'react'
import Img from 'gatsby-image'

const MarkdownImage = ({ sourceImages, clickEvent, ...props }) => {
  const image = sourceImages.find((item) => item.url === props.node.url)
  const handleClick = clickEvent ? clickEvent : () => {}
  return (
    <Img
      fluid={image.localFile.childImageSharp.fluid}
      alt={props.node.alt}
      title={props.node.title}
    />
  )
}

export default MarkdownImage
