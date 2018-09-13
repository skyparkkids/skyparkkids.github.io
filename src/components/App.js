import React, {Component} from "react";
import Popup from "reactjs-popup";
import ImageLoader from 'react-loading-image';
import {isMobile} from "react-device-detect";

import Nav from "./Nav";
import Slideshow from './Slideshow';
import About from './About';
import Pricing from './Pricing';
import Rules from './Rules';
import Contact from './Contact';
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: true
    };
  }

  closeModal = () => {
    this.setState({open: false});
  };

  render() {
    let popupClass = {
      width: '50%'
    };
    if (isMobile) {
      popupClass = {
        width: '90%'
      }
    }
    return (
      <React.Fragment>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
          contentStyle={popupClass}>
          <div>
            <a className="modal-close" onClick={this.closeModal}>
              &times;
            </a>
            <ImageLoader
              className="img-fluid rounded"
              src="./images/event1.jpg"
              loading={() => <h2 className="text-center mt-4 mb-4">Loading...</h2>}
              error={() => <div>Error</div>}/>
          </div>
        </Popup>
        <Nav/>
        <Slideshow/>
        <main className="container">
          <About/>

          <Pricing/>

          <Rules/>

          <Contact/>

        </main>

        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
