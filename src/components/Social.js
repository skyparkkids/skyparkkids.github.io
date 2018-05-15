import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular
} from "react-icons/lib/ti";

const Social = () => {
  return (
    <div className="row mb-4">
      <div className="col-sm-12 text-center">
        <a href="#">
          <TiSocialFacebookCircular width="50" height="50" />
        </a>
        <a href="#">
          <TiSocialInstagramCircular width="50" height="50" />
        </a>
        <a href="#">
          <TiSocialTwitterCircular width="50" height="50" />
        </a>
      </div>
    </div>
  );
};

export default Social;
