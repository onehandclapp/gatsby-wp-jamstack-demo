import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Page route doesn&#39;t exist...hooray it works!.</p>
  </Layout>
)

export default NotFoundPage
