import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './atoms/Header'
import Footer from './atoms/Footer'
import GlobalStyle from '../utils/globalStyles'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <GlobalStyle />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 680,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: '0'
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
