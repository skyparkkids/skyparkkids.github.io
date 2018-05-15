import React, { Component } from "react";
import Menu from "./Menu";
import Content from "./Content";
import Social from "./Social";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <main className="container mt-5 pt-5">
          <div className="row mb-4">
            <div className="col-sm-12 text-center">
              <img
                className="img-fluid mb-5"
                width="60%"
                alt="banner"
                src="images/banner.png"
              />
            </div>
          </div>

          <div className="jumbotron text-center">
            <h1 className="display-4">Coming Soon!</h1>
            <p className="lead">
              Opening on <strong>Middle of June 2018</strong>
            </p>
            <hr />
            <p>Have Questions?</p>
            <p className="lead">
              <a
                className="btn btn-primary btn-lg"
                href="mailto:ssjj77@naver.com"
              >
                Contact Us!
              </a>
            </p>
          </div>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
