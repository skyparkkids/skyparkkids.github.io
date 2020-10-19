import React from "react";
import pdfFile from "../../files/employment.pdf";
import { CONTACT, HOURS, SOCIAL } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="pt-5 pb-5">
      <h1 className="text-center">CONTACT</h1>
      <div className="row">
        <div className="col-lg-8 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.4920973426756!2d-95.34404328488942!3d29.850078981953402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b923418df87f%3A0xd3ee06de5775b244!2sSKY+Park+Kids!5e0!3m2!1sen!2sus!4v1539651629417"
            id="iframe-map"
            title="google-map"
            width="100%"
            height="400px"
            frameBorder="0"
            style={{
              border: 0
            }}
            allowFullScreen
          />
        </div>

        <div className="col-lg-4 mb-4">
          <h4>Contact Details</h4>
          <p>
            <i className="fas fa-map-marker-alt mr-2" />
            {CONTACT.address}
          </p>
          <p>
            <i className="fas fa-phone mr-2" />
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
          </p>
          <p>
            <i className="fas fa-envelope mr-2" />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
          <p>
            <i className="fab fa-facebook mr-2" />
            <a href={SOCIAL.facebook} target="_blank">
              Facebook
            </a>
          </p>
          <p>
            <i className="fab fa-instagram mr-2" />
            <a href={SOCIAL.instagram} target="_blank">
              Instagram
            </a>
          </p>
          <hr />
          <h4>Hours</h4>
          <p>
            <i className="far fa-clock mr-2" />
            {HOURS.week}
            <br />
            <i className="fas fa-clock mr-2" />
            {HOURS.fri}
            <br />
            <i className="fas fa-clock mr-2" />
            {HOURS.sat}
            <br />
            <i className="fas fa-clock mr-2" />
            {HOURS.sun}
          </p>
          <hr />
          <h4>Employment</h4>
          <p>
            Please print and fill out the{" "}
            <a className="text-danger" href={pdfFile} target="_blank">
              Application Form
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
