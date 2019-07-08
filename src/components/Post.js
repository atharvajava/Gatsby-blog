import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import profilepic from "../images/profilepic.jpg"
import { slugify } from "../util/utilityFunction"

const Post =({ title, author, slug, date, fluid, tags }) => {
    return (
        <div className="columns is-mobile is-centered is-vcentered card blog-posts-card">
            <div className="column is-hidden-mobile">
            <Link to={"/"+slug}>
                <figure className="image">
                    <Img className="card-image is-square" fluid={fluid}/>
                </figure>
            </Link>
            </div>
            <div className="column card-content">
                <Link to={"/"+slug}>
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
                </Link><br/>

                <div className="content">
                    {tags.map((tag) =>(
                        <Link key={tag} to={`/tag/${slugify(tag)}`}>
                            <span className="tag is-black is-uppercase">{tag}</span>&nbsp;
                        </Link>
                    ))}<br/>
                    <time className="has-text-right" dateTime="2016-1-1">{date}</time><br/>
                    <Link className="blog-read-button button" to={"/"+slug}>Read</Link>
                </div>
            </div>
        </div>
    )
}

export default Post;