import React from "react";
import ContactForm from "../form/form";

import "./contact.css";
import "../../global.css";

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      formInfo: [
        {
          id: 0,
          contact_icon: "fas fa-location-arrow",
          contact_icon_text: "address",
          contact_text: "123 Main Street, City, State, Zip",
        },
        {
          id: 1,
          contact_icon: "fas fa-envelope",
          contact_icon_text: "email",
          contact_text: "eam@example.com",
        },
        {
          id: 2,
          contact_icon: "fas fa-phone",
          contact_icon_text: "telephone",
          contact_text: "+123 456 789",
        },
      ],
    };
  }
  render() {
    return (
      <section className="contact">
        <div className="section-center clearfix">
          <article className="contact-info">
            {this.state.formInfo.map((form) => (
              <div className="contact-item" key={form.id}>
                <h4 className="contact-title">
                  <span className="contact-icon">
                    <i className={form.contact_icon}></i>
                  </span>
                  {form.contact_icon_text}
                </h4>
                <h4 className="contact-text">{form.contact_text}</h4>
              </div>
            ))}
          </article>
          <ContactForm />
        </div>
      </section>
    );
  }
}
export default Contact;
