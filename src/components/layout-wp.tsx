/**
 * Layout component that queries for dataQuery
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout-wp.css"
// @ts-ignore
const LayoutWP = ({ children, title }) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`

  const dataQuery = useStaticQuery(graphql`
    query WPBlogQuery {
      wpgraphql {
        menus {
          nodes {
            menuItems {
              nodes {
                url
                label
              }
            }
          }
        }
        generalSettings {
          url
        }
      }
    }
  `)

  const url = dataQuery.wpgraphql.generalSettings.url
  // TODO: this is ugly :(
  // @ts-ignore
  const menuItems = dataQuery.wpgraphql.menus.nodes[0].menuItems.nodes.map(
    (item) => ({
      label: item.label,
      url: item.url.replace(url, ""),
    })
  )

  return (
    <>
      <Header siteTitle={title} />
      <header>
        <div></div>

        <ul id="navlist">
          {menuItems
            .filter((item) => item.url !== "/")
            .map((item) => (
              <li>
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}
        </ul>
      </header>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: "50px",
          fontFamily: "arial",
        }}
      >
        <main>{children}</main>
        <pre>
          <Link to="/blog">Blog Main Page</Link> |{" "}
          <Link to="/">Gatsby Home Page</Link>
        </pre>

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

LayoutWP.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWP
