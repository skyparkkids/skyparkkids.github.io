import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    };
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  onToggleMenu() {
    console.log("onToggleMenu");
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  renderDetails() {
    return (
      <div className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Follow on Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Email me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
      console.log(this.state);
    return (
      <header>
        {this.state.isExpanded && this.renderDetails()}
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>Sky Park Kids</strong>
            </a>
            <button
              className="navbar-toggler collapsed"
              onClick={this.onToggleMenu}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
