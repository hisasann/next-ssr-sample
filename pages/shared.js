import Link from 'next/link'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const linkStyle = {
  marginRight: 15
}

export const Layout = (props) => (
  <div style={layoutStyle}>
    <p>rendered by: {getRenderedBy()}</p>
    {props.children}
  </div>
)

export const PostLink = (props) => (
 <Link href={`/p/${props.title}`}>
   <a style={linkStyle}>{props.title}</a>
 </Link>
)

export function getRenderedBy() {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
}