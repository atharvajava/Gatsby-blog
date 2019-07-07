import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {slugify} from "../util/utilityFunction"
import { Link } from "gatsby"

const tagsPage = ({pageContext}) =>{
    const {tags, tagPostCounts} = pageContext
    return(
        <Layout>
            <SEO title="All tags" keywords={["tags","topics"]}></SEO>
            <p className="is-size-1">All Tags</p><br/>
            
                {tags.map(tag=>(
                    <Link key={tag} to={`/tag/${slugify(tag)}`}>
                        <span className="tag is-black is-uppercase time-tag">{tag}{tagPostCounts[tag]}</span>
                    </Link>
                ))}
        </Layout>
    )
}

export default tagsPage