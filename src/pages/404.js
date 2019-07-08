import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p className="has-text-centered is-size-1" >404 NOT FOUND</p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <br/>
    <Link to="/" className="button">Go Back Home</Link>
  </Layout>
)

export default NotFoundPage
