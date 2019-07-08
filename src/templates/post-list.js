import React from "react"
import Post from "../components/Post"
import { graphql } from "gatsby"
import BlogWrapper from "../components/BlogWrapper"
import PaginationLinks from "../components/PaginationLinks"

const postList= (props) => {
    const posts = props.data.allMarkdownRemark.edges
    const { currentPage, numberOfPages } = props.pageContext
    
    return (
        <BlogWrapper pageTitle="Nerd Logs">
            {posts.map(({node})=>(
                <Post key={node.id}
                slug={node.fields.slug}
                title= {node.frontmatter.title}
                author= {node.frontmatter.author}
                date= {node.frontmatter.date}
                body= {node.excerpt}
                tags= {node.frontmatter.tags}
                fluid= {node.frontmatter.image.childImageSharp.fluid}
                />
            ))}
        <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages}/>
        </BlogWrapper>
    )
}

export const postListQuery = graphql `
    query postListQuery($skip: Int!, $limit: Int!){
        allMarkdownRemark (
            sort: { fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
        ){
            edges{
                node{
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM Do YYYY")
                        author
                        tags
                        image {
                            childImageSharp {
                                fluid(maxWidth: 650, maxHeight: 371){
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

export default postList