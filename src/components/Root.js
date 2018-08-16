import React from 'react';
import Nav from './Nav';

const Root = () => {
  return (
    <React.Fragment>
      <Nav/>
      <div
        className="w3-content"
        style={{
        maxWidth: '1100px',
        marginTop: '80px',
        marginBottom: '80px'
      }}>

        <div className="w3-panel">
          <img
            className="img-fluid mb-2"
            width="30%"
            alt="banner"
            src="images/banner.png"/>
        </div>

        <div className="w3-container">
          <div className="w3-col">
            <a href="./images/jumper.jpg" target="_blank">
              <img src="./images/jumper.jpg" alt="jumper"/>
            </a>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Root;