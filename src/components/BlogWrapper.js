
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "../styles/main.scss"
import Sidebar from "../components/Sidebar"

const BlogWrapper = ({ children,pageTitle }) => {
    const data = useStaticQuery(graphql`
      query BlogTitleQuery {
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">
          <main>
          <div className="columns">
            <div className="column is-two-thirds">
                <p className="is-size-1 has-text-centered is-uppercase other-page-title">{pageTitle}</p>
                {children}
            </div>
                <div className="is-hidden-mobile column is-one-third blog-sidebar">
                    <Sidebar/>
                </div>
            </div>
          </main><br/><br/>
        </div>
        <Footer/>
      </>
    )
  }
  
  BlogWrapper.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default BlogWrapper