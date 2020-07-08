import React from "react"
import { graphql } from "gatsby"
import LayoutWP from "../components/layout-wp"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
      }
    }
  }
`
// @ts-ignore
const PageTemplate = ({ data }) => {
  const { title, content } = data.wpgraphql.page
  return (
    <LayoutWP title="WP Page Template">
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </LayoutWP>
  )
}

export default PageTemplate
