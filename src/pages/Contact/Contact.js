import React, { useRef, useState } from "react";
import { GoMailRead } from "react-icons/go";
// import EmailJS from "emailjs-com";
import { FaMailchimp } from "react-icons/fa";

import { GrMapLocation } from "react-icons/gr";
import { BsTelephoneForward } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact">
      <h1 className="header">Contact Us</h1>
      <p className="header-para">
        We love questions and feedback-and we're always happy to help
      </p>
      <div className="contact-page">
        <div className="contact-left">
          <h3>Send us a message</h3>
          <p>Send us a message and we'll respond in 24 hours</p>
          <form>
            <div>
              <div className="names-emails">
                <div className="name">
                  <label>Full Name</label>
                  <br />
                  <input type="text" placeholder="Type full name here" />
                </div>
                <div className="email">
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="Type email here" />
                </div>
              </div>
              <div className="telephone-organisation">
                <div className="tel">
                  <label>Telephone</label>
                  <br />
                  <input type="tel" placeholder="Phone number" />
                </div>
                <div className="organisation">
                  <label>Organisation</label>
                  <br />
                  <input type="text" placeholder="Organisation name" />
                </div>
              </div>
              <br />
              <label className="message">Message</label>
              <br />
              <textarea
                name="textaere"
                placeholder="type your message here"
                id="textarea"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="btn-secondary" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Contact Information</h3>
          <p>
            <GrMapLocation /> Kibitzweg 4, 24565 Kiel
          </p>
          <p>
            <GoMailRead /> contact.us@fakemail.com
          </p>{" "}
          <p>
            <BsTelephoneForward /> +49 777 7777
          </p>
          <p>
            <FaMailchimp /> Chimp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
