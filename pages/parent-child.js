import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { Layout } from './shared';

export default withRouter((props) => (
  <Layout>
    <h1>{props.router.query.a}</h1>
    <h1>{props.router.query.b}</h1>
  </Layout>
))
