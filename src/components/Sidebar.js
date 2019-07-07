import React from "react"

const Sidebar = () => (
    <>
    <div className="card">
        <div className="card-content">
        <p className="is-size-4 has-text-centered">
            Newsletter
        </p><br/>
        <input className="input is-primary" type="text" placeholder="Your Email Address"/><br/><br/>
        <div className="has-text-centered">
            <button className="button is-primary">Subscribe</button>
        </div>
        </div>
    </div>

    <div className="card">
        <div className="card-content">
        <p className="is-size-4 has-text-centered">
           Advertisement
        </p><br/>
        <div className="card-image">
            <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="advertisement"/>
            </figure>
        </div>
        </div>
    </div>
    </>
)

export default Sidebar