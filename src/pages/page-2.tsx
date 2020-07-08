import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>This is another page yeah?</h2>
    <p>Welcome to this page that is not like the other.</p>

    <pre>
      <Link to="/">Go back to the homepage</Link>
    </pre>
  </Layout>
)

export default SecondPage
