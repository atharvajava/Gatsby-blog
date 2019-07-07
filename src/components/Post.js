import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import profilepic from "../images/profilepic.jpg"
import { slugify } from "../util/utilityFunction"

const Post =({ title, author, slug, date, body, fluid, tags }) => {
    return (
        <div className="card">
            <Link to={slug}>
                <Img className="card-image" fluid={fluid}/>
            </Link>
            <div className="card-content">
            <Link to={slug}>
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={profilepic} alt="profile pic"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">@{author}</p>
                    </div>
                </div>
            </Link>

                <div className="content">
                    {body}
                    <br/><br/>
                    <time className="has-text-right" dateTime="2016-1-1">{date}
                    <br/>
                    {tags.map((tag) =>(
                        <Link key={tag} to={`/tag/${slugify(tag)}`}>
                            <span className="tag is-black is-uppercase">{tag}</span>&nbsp;
                        </Link>
                    ))}</time>
                    <Link className="media-right button" to={slug}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Post;