import React from 'react'

import style from './Footer.module.scss'

const Footer = () => {
  const time = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <p>© {time}</p>
      <p>Hosted by oldmoh</p>
    </footer>
  )
}

export default Footer
