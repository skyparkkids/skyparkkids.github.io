import React from "react";
// import {TiSocialFacebookCircular, TiSocialInstagramCircular,
// TiSocialTwitterCircular} from "react-icons/lib/ti";

const Footer = () => {
  return (
    <footer className="container-fluid p-4 border-top">
      <div className="row">
        <div className="col-6 col-sm-4">
          <ul className="list-unstyled m-0">
            <li>
              <strong>SKYPARKKIDS</strong>
            </li>
            <li>9610 Jenson Dr.</li>
            <li>Houston, TX 77093</li>
            <li>346-571-5904</li>
            {/* <li>Phone Number</li> */}
          </ul>
        </div>

        <div className="col-6 col-sm-4 text-center">
          <img
            className="img-fluid mb-1"
            width="100"
            alt="banner"
            src="images/banner.png"/>
          <small className="d-block mb-3 text-muted">
            ©2018 SKYPARKKIDS<br/>All right reserved
          </small>
        </div>

        {/* <div className="col-12 col-sm-4 text-right">
          <TiSocialFacebookCircular width="40" height="40" />
          <TiSocialInstagramCircular width="40" height="40" />
          <TiSocialTwitterCircular width="40" height="40" />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
