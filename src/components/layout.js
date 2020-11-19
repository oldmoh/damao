import React from 'react'
import Helmet from 'react-helmet'
import { Container } from 'react-bootstrap'

import Header from './Header'
import Footer from './Footer'
import style from './layout.module.scss'

const Template = ({ children }) => (
  <Container fluid className="no-gutters p-0">
    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </Helmet>

    <div className={style.side}>
      <Header />
    </div>
    <div className={style.main}>
      <main >{children}</main>
      <Footer />
    </div>
  </Container>
)

export default Template
