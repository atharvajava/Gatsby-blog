import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import slugify from "../util/utilityFunction"

const SinglePost=(data)=>{
    const post = data.markdownRemark.frontmatter
    return (
        <Layout>
            <SEO title={post.title}/>
            <h1>{post.title}</h1>
            <div className="columns">
                <div className="column is-two-thirds">
                    <div className="card">
                        <Img fluid={post.image.childImageSharp.fluid}/>
                    </div>
                    <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>{body}</div>
                    <br/><br/>
                    <time className="has-text-right" dateTime="2016-1-1">{date}
                    <br/>
                    {tags.map((tag,index) =>(
                        <Link key={index} to={`/tag/${slugify(tag)}`}>
                            <span className="tag is-black is-uppercase">{tag}</span>&nbsp;
                        </Link>
                    ))}</time>
                    <Link className="media-right button" to={slug}>Read More</Link>
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