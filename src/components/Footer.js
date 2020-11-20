import React from 'react'

import style from './Footer.module.scss'

const Footer = () => {
  const createdFrom = new Date(2020, 10).getFullYear()
  const now = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <p>
        {createdFrom}-{now}
      </p>
      <p>Hosted by damao</p>
    </footer>
  )
}

export default Footer
