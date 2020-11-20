import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './Header'
import Footer from './Footer'
import '../assets/scss/index.scss'
import style from './layout.module.scss'

const Template = ({ children }) => (
  <Container fluid className="no-gutters p-0">
    <div className={style.side}>
      <Header />
    </div>
    <div className={style.main}>
      <main>{children}</main>
      <Footer />
    </div>
  </Container>
)

export default Template
