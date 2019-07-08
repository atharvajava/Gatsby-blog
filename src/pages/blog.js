import React , { useState } from "react"

import BlogWrapper from "../components/BlogWrapper"
import SEO from "../components/seo"
import { graphql,StaticQuery } from "gatsby";
import Post from "../components/Post";
import PaginationLinks from "../components/PaginationLinks";

const BlogPage = () => {
  const [numberOfPages, setnumberOfPages] = useState(0);
  const postPerPage = 10;
  return (
  <BlogWrapper pageTitle="Nerd logs">
    <SEO title="Blog" />
    <StaticQuery query={indexQuery} render={ data=>{
      setnumberOfPages(Math.ceil(data.allMarkdownRemark.totalCount/postPerPage))
        return (
            data.allMarkdownRemark.edges.map(({node},index) => (
            <Post key={index} title={node.frontmatter.title}
            author={node.frontmatter.author}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            body={node.excerpt}
            fluid={node.frontmatter.image.childImageSharp.fluid}
            tags={node.frontmatter.tags}
            />
          ))
        )
      }}/>
    <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
  </BlogWrapper>
  )
}

const indexQuery = graphql`{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
    limit:10 ) {
    totalCount
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
