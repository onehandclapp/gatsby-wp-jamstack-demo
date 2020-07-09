import React from "react"
import { graphql } from "gatsby"
import LayoutWP from "../components/layout-wp"
import "@wordpress/block-library/build-style/style.css"

//NOTE: The local css wp link for block library
// href="http://192.168.1.79:8083/wp-includes/css/dist/block-library/style.min.css?ver=5.4.2"

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
