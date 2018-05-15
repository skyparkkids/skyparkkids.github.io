import React from "react";

const Content = () => {
  return (
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Membership</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $$ <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>line 1</li>
              <li>line 2</li>
              <li>line 3</li>
              <li>line 4</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">
              More Info
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Location</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              Houston<small className="text-muted">, TX</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>line 1</li>
              <li>line 2</li>
              <li>line 3</li>
              <li>line 4</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">
              More Info
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Hours</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">MON - SUN</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>line 1</li>
              <li>line 2</li>
              <li>line 3</li>
              <li>line 4</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
