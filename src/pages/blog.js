import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql,StaticQuery } from "gatsby";
import Post from "../components/Post";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <StaticQuery query={indexQuery} render={ data=>{
        return (
        <div>
          {data.allMarkdownRemark.edges.map(({node},index) => (
            <Post key={index} title={node.frontmatter.title}
            author={node.frontmatter.author}
            path={node.frontmatter.path}
            date={node.frontmatter.date}
            body={node.excerpt}
            />
          ))}
        </div>
        )
      }}/>
  </Layout>
)

const indexQuery = graphql`{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
          path
        }
        excerpt
      }
    }
  }
}
`

export default BlogPage
