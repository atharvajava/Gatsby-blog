import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import profilepic from "../images/profilepic.jpg"

const Post =({ title, author, path, date, body, fluid }) => {
    return (
        <div className="card">
            <Link to={path}>
                <Img className="card-image" fluid={fluid}/>
            </Link>
            <div className="card-content">
            <Link to={path}>
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={profilepic} alt="Placeholder image"/>
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
                    <br/>
                    <time dateTime="2016-1-1">{date}</time>
                    <Link className="media-right" to={path}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Post;