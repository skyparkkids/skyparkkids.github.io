import React from 'react';
import ImageLoader from 'react-loading-image';
import {CONTACT, HOURS} from '../../constants';

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
          <h4><i className="fas fa-map-marker-alt mr-2"/>{CONTACT.address}</h4>
          <h4><i className="fas fa-phone mr-2"/>
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
          </h4>
          <h4><i className="far fa-clock mr-2"/>{HOURS.week}
            <br/><i className="fas fa-clock mr-2"/>{HOURS.weekend}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;