import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
// @ts-ignore
const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log(">>>>location: ", location)
  return (
    <Layout location={{ pathname: "/" }} title={siteTitle}>
      <SEO title="Home" />
      <h1>Welcome to the Demo</h1>
      <p style={{ fontFamily: "Arial" }}>
        The COVID-19 pandemic in Singapore has impacted many of us financially.
        We understand that during this difficult period, some of us may find it
        hard to pay for our insurance premiums. Yet, we know this is precisely
        the time when everyone needs crucial insurance protection and coverage.
      </p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Link style={{ boxShadow: `none`, fontFamily: "Arial" }} to="/blog">
          <button>See Wordpress Pages</button>
        </Link>
        <br></br>
        <br></br>
        <Link
          style={{ boxShadow: `none`, fontFamily: "Arial" }}
          to="/app/test-dynamic-api/1"
        >
          <button>Test Dynamic API</button>
        </Link>
        <Image />
      </div>

      <h2>Static Markdown Blog Entry</h2>
      <hr></hr>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                style={{ fontFamily: "Arial" }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
      <pre>
        <Link to="/page-2/">Click here to visit another page</Link>
      </pre>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
