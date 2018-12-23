import React from 'react'
import { css } from 'glamor'

const style = css({
  color: 'red',
  ':hover': {
    color: 'green'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
})

export default () => <p className={style}>Hi there!</p>

