import React from "react"
import { graphql, Link } from "gatsby"
import LayoutWP from "../components/layout-wp"

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          id
          title
          uri
          excerpt
        }
      }
    }
  }
`
// @ts-ignore
const Blog = ({ data }) => {
  const posts = data.wpgraphql.posts.nodes

  return (
    <LayoutWP title="Gatsby WP Jamstack Demo">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 style={{ borderBottom: "1px solid gray" }}>
              <Link
                to={`/blog${post.uri}`}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </li>
        ))}
      </ul>
    </LayoutWP>
  )
}

export default Blog
