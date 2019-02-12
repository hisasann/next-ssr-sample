import React from 'react'

export default class extends React.Component {
  static getInitialProps ({ query: { client, detail } }) {
    return { client, detail }
  }

  render () {
    console.log('cl render');

    return (
      <div>
        <h1>client: {this.props.client}, detail: {this.props.detail}</h1>
      </div>
    )
  }
}
