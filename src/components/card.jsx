import React from 'react'
import { Link } from 'gatsby'
import { Card } from 'react-bootstrap'

import style from './card.module.scss'

const PostCard = ({ title, created_at, content, slug, preface }) => {
  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{new Date(created_at).toDateString()}</Card.Subtitle>
        <Card.Text>{preface}</Card.Text>
        <Link className="card-link" to={`/post/${slug}`}>
          Learn More
        </Link>
      </Card.Body>
    </Card>
  )
}

export default PostCard
