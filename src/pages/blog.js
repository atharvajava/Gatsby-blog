import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql,StaticQuery } from "gatsby";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <StaticQuery query={indexQuery} render={ data=>{
        return (
          <div className="columns">
        <div className="column is-two-thirds">
          {data.allMarkdownRemark.edges.map(({node},index) => (
            <Post key={index} title={node.frontmatter.title}
            author={node.frontmatter.author}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            body={node.excerpt}
            fluid={node.frontmatter.image.childImageSharp.fluid}
            tags={node.frontmatter.tags}
            />
          ))}
        </div >
        <div className="is-hidden-mobile column is-one-third blog-sidebar">
        <Sidebar/>
        </div>
            
        </div>
        )
      }}/>
  </Layout>
)

const indexQuery = graphql`{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
    limit:1 ) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
          tags
          image   {
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`

export default BlogPage
