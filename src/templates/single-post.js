import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import { graphql,Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {slugify} from "../util/utilityFunction"
import ReactHtmlParser from "react-html-parser"

const SinglePost=({data})=>{
    const post = data.markdownRemark.frontmatter
    
    return (
        <Layout>
            <SEO title={post.title}/>
            <p className="is-size-3-mobile">{post.title}</p>
            <div className="columns">
                <div className="column is-two-thirds">
                    <div className="card">
                        <Img fluid={post.image.childImageSharp.fluid}/>
                    </div>
                    <div className="content single-blog-content">
                    <div>{ReactHtmlParser(data.markdownRemark.html)}</div>
                    <br/><br/>
                    <time className="has-text-right" dateTime="2016-1-1">{post.date}</time>
                    <br/>
                    {post.tags.map((tag) =>{
                        
                        return (
                        <Link key={tag} to={`/tag/${slugify(tag)}`}>
                            <span className="tag is-black is-uppercase">{tag}</span>&nbsp;
                        </Link>
                    )})}
                    <Link className="media-right button" to="/blog">Back</Link>
                </div>
                </div>
                <div className="is-hidden-mobile column is-one-third blog-sidebar">
                    <Sidebar/>
                </div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql `
query blogPostBySlug($slug:String!){
    markdownRemark(fields:{ slug: { eq: $slug }}){
        id
        html
        frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            tags
            image {
                childImageSharp {
                    fluid(maxWidth: 700){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}`
export default SinglePost