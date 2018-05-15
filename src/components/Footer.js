import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular
} from "react-icons/lib/ti";

const Footer = () => {
  return (
    <footer className="container-fluid pt-4 border-top">
      <div className="row">
        <div className="col-sm-4">
          <ul className="list-unstyled">
            <li>
              <strong>Sky Park Kids</strong>
            </li>
            <li>Address line 1</li>
            <li>City, State Zipcode</li>
            <li>Phone Number</li>
          </ul>
        </div>

        <div className="col-sm-4 text-center">
          <img
            className="img-fluid mb-1"
            width="75"
            alt="banner"
            src="images/banner.png"
          />
          <small className="d-block mb-3 text-muted">
            ©2018 Sky Park Kids<br />All right reserved
          </small>
        </div>

        <div className="col-sm-4 text-right">
          <TiSocialFacebookCircular width="40" height="40" />
          <TiSocialInstagramCircular width="40" height="40" />
          <TiSocialTwitterCircular width="40" height="40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
