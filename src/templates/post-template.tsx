import React from "react"
import { graphql } from "gatsby"
import LayoutWP from "../components/layout-wp"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
      }
    }
  }
`
// @ts-ignore
const PostTemplate = ({ data }) => {
  const { title, content } = data.wpgraphql.post
  return (
    <LayoutWP title="WP Post Template">
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </LayoutWP>
  )
}

export default PostTemplate
