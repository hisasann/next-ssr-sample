import React from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps () {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    const res = await fetch(`http://www.thecolorapi.com/id?hex=${hex}`)
    const data = await res.json()
    return { named: data.image.named }
  }

  render() {
    return (
      <div>
        <div><img src={this.props.named} /></div>
        <Link href="./scheme">
          <a>scheme</a>
        </Link>{' '}
      </div>
    )
  }
}