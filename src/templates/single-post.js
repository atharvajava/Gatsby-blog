import React from "react"
import BlogWrapper from "../components/BlogWrapper"
import { graphql,Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {slugify} from "../util/utilityFunction"
import ReactHtmlParser from "react-html-parser"
//import authors from "../util/authors"
import { DiscussionEmbed } from "disqus-react"

const SinglePost=({data , pageContext})=>{
    const post = data.markdownRemark.frontmatter
    //const author = authors.find(x=> x.name === post.author)
    const baseUrl= "https://atharvapandey.com/"

    const disquesShortname = "atharvapandey"
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }
    return (
        <BlogWrapper>
            <SEO title={post.title}/>
            <p className="is-size-3">{post.title}</p>
                    <div className="card">
                        <Img fluid={post.image.childImageSharp.fluid}/>
                    
                    <div className="card-content single-blog-content">
                    <div>{ReactHtmlParser(data.markdownRemark.html)}</div>
                    <br/><br/>
                    <time className="has-text-right time-tag" dateTime="2016-1-1">{post.date}
                    <br/>
                    {post.tags.map((tag) =>{
                        return (
                        <Link key={tag} to={`/tag/${slugify(tag)}`}>
                            <span className="tag is-black is-uppercase time-tag">{tag}</span>
                        </Link>
                    )})}
                    </time>
                    <div className="social-share-chirps">
                        <span className="facebook"><a href={"https://www.facebook.com/sharer/sharer.php?u="+ baseUrl + pageContext.slug} target="_blank" rel="noopener noreferrer"></a></span>
                        <span className="twitter"><a href={`https://twitter.com/share?url="+ ${baseUrl} + ${pageContext.slug}+"&text="+${post.title}+"&via"+"twitterHandle`} target="_blank" rel="noopener noreferrer"></a></span>
                        <span className="linked-in"><a href={"https://www.linkedin.com/shareArticle?url="+ baseUrl + pageContext.slug} target="_blank" rel="noopener noreferrer"></a></span>
                        <Link className="button back" to="/blog">Back</Link>
                    </div>
                    </div>
                </div>
                <DiscussionEmbed shortname={disquesShortname} config={disqusConfig}/>
        </BlogWrapper>
    )
}

export const postQuery = graphql `
query blogPostBySlug($slug: String! , $imageUrl: String!){
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
    file(relativePath: { eq: $imageUrl }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
}`
export default SinglePost