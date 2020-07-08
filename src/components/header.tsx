import { Link } from "gatsby"
import React from "react"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => (
  <header
    style={{
      background: `orange`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

export default Header
