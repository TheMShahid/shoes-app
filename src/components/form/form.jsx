import React from "react";

import "./form.css";
import "../../global.css";

const formData = [
  {
    id: 0,
    type: "text",
    name: "name",
    placeholder: "Name",
  },
  { id: 1, type: "password", name: "password", placeholder: "Password" },
];

const ContactForm = () => (
  <article className="contact-form">
    <h3>contact us</h3>
    <form className="">
      <div className="form-group">
        {formData.map((data) => (
          <input
            key={data.id}
            type={data.type}
            name={data.name}
            placeholder={data.placeholder}
            className="form-control"
          />
        ))}
        <textarea
          type="textarea"
          rows="5"
          className="form-control"
          name="message"
          placeholder="Enter message"
        />
      </div>
      <button className="btn submit-btn" type="submit">
        submit here
      </button>
    </form>
  </article>
);

export default ContactForm;
