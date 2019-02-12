import Link from 'next/link'
import Router from 'next/router'
// lodash は index ページにしか追加されない、ここが Code Splitting
import _ from 'lodash'

const client = 100;
const detail = 200;

export default () => (
  <ul>
    <li>
      <Link href='/cl?client=100&detail=200' as={`/cl-${client}/d-${detail}`}>
        <a>parameterized-routing</a>
      </Link>
    </li>
    <li>
      Click <span onClick={() => Router.push('/fetch/color')}>here</span> to /fetch/color
    </li>
    <li>
      <Link href='/blog?id=first' as='/blog/first'>
        <a>My first blog post</a>
      </Link>
    </li>
    <li>
      <Link href='/blog?id=second' as='/blog/second'>
        <a>My second blog post</a>
      </Link>
    </li>
    <li>
      <Link href='/blog?id=last' as='/blog/last'>
        <a>My last blog post</a>
      </Link>
    </li>
  </ul>
)
