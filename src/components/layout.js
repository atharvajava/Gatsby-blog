/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "../styles/main.scss"
import { useNetlifyIdentity, IdentityContextProvider } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

const Layout = ({ children }) => {
  const URL = "https://www.atharvapandey.com"
  const identity = useNetlifyIdentity(URL)
  const data = useStaticQuery(graphql`
    query SiteProtectedTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <IdentityContextProvider url={URL} value={identity}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main>{children}</main><br/><br/>
      </div>
    </IdentityContextProvider>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
