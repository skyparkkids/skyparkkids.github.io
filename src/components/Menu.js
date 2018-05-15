import React from "react";

const Menu = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow fixed-top">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <img
          className="img-fluid"
          width="100px"
          alt="banner"
          src="images/banner.png"
        />
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#">
          Photos
        </a>
        <a className="p-2 text-dark" href="#">
          Location
        </a>
        <a className="p-2 text-dark" href="#">
          Hours
        </a>
      </nav>
      <a className="btn btn-outline-primary" href="mailto:ssjj77@naver.com">
        Contact Us
      </a>
    </div>
  );
};

export default Menu;
