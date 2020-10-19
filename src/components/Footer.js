import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
} from "react-icons/lib/ti";
import { CONTACT, SOCIAL } from "../constants";
import BannerImage from "../images/banner.png";

const Footer = () => {
  return (
    <footer className="container-fluid p-4 border-top">
      <div className="row">
        <div className="col-6 col-sm-4">
          <ul className="list-unstyled m-0">
            <li>
              <strong>{CONTACT.name}</strong>
            </li>
            <li>{CONTACT.street}</li>
            <li>{CONTACT.cityState}</li>
            <li>
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-sm-4 text-center">
          <img
            className="img-fluid mb-1"
            width="100"
            alt="banner"
            src={BannerImage}
          />
          <small className="d-block mb-3 text-muted">
            ©2018 {CONTACT.name}
            <br />
            All rights reserved
          </small>
        </div>

        <div className="col-12 col-sm-4 text-right">
          <a href={SOCIAL.facebook} target="_blank">
            <TiSocialFacebookCircular width="40" height="40" />
          </a>
          <a href={SOCIAL.instagram} target="_blank">
            <TiSocialInstagramCircular width="40" height="40" />
          </a>
          {/* <a href="" target="_blank"><TiSocialTwitterCircular width="40" height="40"/></a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
