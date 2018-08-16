import React from 'react';
import ImageLoader from 'react-loading-image';

const About = () => {
  return (
    <section id="about" className="pt-5 pb-5">
      <div className="row text-center">
        <div className="col-lg-6">
          {/* <img
            className="img-fluid rounded mb-4"
            src="images/banner.png"
            alt="banner/logo"/> */}
          <ImageLoader
            className="img-fluid rounded mb-4"
            src="./images/banner.png"
            loading={() => <i
            className="fas fa-spinner fa-spin"
            style={{
            fontSize: '96px'
          }}/>}
            error={(err) => <div>Error</div>}/>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5">GRAND OPENING<br/>
            <small className="text-muted">Sunday August 5th, 2018
            </small>
          </h1>
          <p><i className="fas fa-map-marker-alt mr-2"/>9610 Jenson Dr. Houston, TX 77093</p>
          <p><i className="fas fa-phone mr-2"/>
            <a href="tel:346-571-5904">346-571-5904</a>
          </p>
          <p><i className="far fa-clock mr-2"/>
            MON-FRI 10AM-9PM
            <br/><i className="fas fa-clock mr-2"/>SAT-SUN 9AM-9PM
          </p>

          {/* <p className="lead">Come and join us for grand opening day events. We're giving
            out special prizes at given times below so don't miss out!</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h5>
                <span className="badge badge-warning">1:00PM
                </span>{" "}
                IPAD, 32-inch TV, T-Shirts
              </h5>
            </li>
            <li className="list-group-item">
              <h5>
                <span className="badge badge-success">4:00PM
                </span>{" "}
                IPAD, 32-inch TV, T-Shirts
              </h5>
            </li>
            <li className="list-group-item">
              <h5>
                <span className="badge badge-primary">7:00PM
                </span>{" "}
                IPAD, 32-inch TV, T-Shirts
              </h5>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default About;