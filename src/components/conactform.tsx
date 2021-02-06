// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status }: any = this.state
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mvovywql"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 rounded focus:outline-none focus:bg-gray-100"
          id="email"
          placeholder="Your email*"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <label>Message:</label>
        <textarea
          className="tracking-wide py-2 px-4 mb-3 leading-relaxed  appearance-none block w-full h-56 bg-gray-200 rounded focus:outline-none focus:bg-gray-100 resize-y"
          id="message"
          name="message"
          placeholder="Message..."
        />
        {status === "SUCCESS" ? (
          <p className="w-full text-center text-xl px-8 py-2 border border-gray text-gray focus:outline-none shadow-sm rounded">
            Thanks! will respond you shortly
          </p>
        ) : (
          <button className="w-full uppercase text-xl px-8 py-2 border border-black text-black focus:outline-none shadow-sm hover:shadow-lg rounded">
            Submit
          </button>
        )}
        {status === "ERROR" && (
          <p className="w-full text-center uppercase text-xl px-8 py-2 border border-red text-red focus:outline-none shadow-sm rounded">
            Ooops! There was an error. contact me on atharvajava@gmail.com
          </p>
        )}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
