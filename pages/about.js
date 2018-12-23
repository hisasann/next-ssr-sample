import { withRouter } from 'next/router'
import Link from 'next/link'

export default withRouter((props) => (
  <div>
    <h1>{props.router.query.id}</h1>

    Click{' '}
    <Link href="/">
      <a>index</a>
    </Link>{' '}
    to read more
  </div>
))
