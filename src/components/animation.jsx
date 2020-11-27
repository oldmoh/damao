import React from 'react'
import classnames from 'classnames'

import style from './animation.module.scss'

const Animation = ({ children, delay = 0, play = false, ...props }) => {
  let className = children.props.className ? children.props.className : ''
  className = classnames(className, style.default, { [style.show]: play })

  let styles = children.props.style ? { ...children.props.style } : {}
  styles = { transitionDelay: `${delay}ms`, ...styles }

  return React.cloneElement(children, {
    className: className,
    style: styles,
    ...props,
  })
}

export default Animation
