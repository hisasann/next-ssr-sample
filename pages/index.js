import Link from 'next/link'
import Router from 'next/router'
// lodash は index ページにしか追加されない、ここが Code Splitting
import _ from 'lodash'
import { Layout, PostLink } from './shared'

export default () => (
  <div>
    <Layout>
      <p>This is the index page</p>
      <ul>
        <li><PostLink title="Hello Next.js"/></li>
        <li><PostLink title="Learn Next.js is awesome"/></li>
        <li><PostLink title="Deploy apps with Zeit"/></li>
      </ul>
    </Layout>

    <div>
      Click{' '}
      <Link href="/about">
        <a>about</a>
      </Link>{' '}
      to read more
    </div>

    <div>
      Click <span onClick={() => Router.push('/about')}>here</span> to read more
    </div>
  </div>
)