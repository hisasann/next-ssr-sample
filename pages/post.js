import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { Layout } from './shared';

export default withRouter((props) => (
  <Layout>
   <h1>{props.router.query.title}</h1>
   <p>This is the blog post content.</p>
  </Layout>
))