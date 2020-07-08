/**
 * Layout component that queries for dataQuery
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import Header from "./header"
import "./layout.css"
// @ts-ignore
const Layout /*: React.FC*/ = ({ children, location, title }) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const dataQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (location?.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <>
      <Header siteTitle={dataQuery.site.siteMetadata.title} />
      <div>{header}</div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <pre style={{ padding: "3em", display: "flex" }}>
            © {new Date().getFullYear()} Copyleft
            {` `}
            <a href="https://www.gatsby.org">By Right</a>
          </pre>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
