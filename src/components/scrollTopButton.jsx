import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import style from './scrollTopButton.module.scss'

const ScrollTopButton = ({ offset = 50, ...props }) => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    if (typeof window === 'undefined') return
    if (window.pageYOffset > offset) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (window) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div className={classnames(style.container, { [style.show]: show })}>
      <button className={style.button} onClick={handleClick}>
        <svg height="32" width="32">
          <polygon points="15,8 8,18 13,18 13,26 17,26 17,18 22,18" />
        </svg>
      </button>
    </div>
  )
}

export default ScrollTopButton
