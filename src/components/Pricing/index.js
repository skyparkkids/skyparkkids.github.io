import React from 'react';
import Card from '../Card';
import pdfFile from '../../files/form.pdf';

const Pricing = () => {
  return (
    <section id="pricing" className="pt-5 pb-5">
      <h1 className="text-center">PRICING</h1>
      <div id="accordion">
        <Card title="SINGLE JUMPER RATES" name="singleJumper" show>
          <div className="col-lg-4 mb-4">
            <h2>4 & UNDER</h2>
            <hr/>
            <h4>1 Hour $6.95</h4>
            <h4>2 Hour $12.95</h4>
          </div>
          <div className="col-lg-4 mb-4">
            <h2>5 & OVER</h2>
            <hr/>
            <h4>1 Hour $10.95</h4>
            <h4>2 Hour $18.95</h4>
          </div>
          <div className="col-lg-4">
            <h2>ONE DAY PASS</h2>
            <hr/>
            <h4>Unlimited $29.95</h4>
          </div>
        </Card>
        <Card title="FAMILY PACKAGE" name="familyPackage">
          <div className="col">
            <h2>4 Jumpers</h2>
            <hr/>
            <h4>
              $69.95
              <div className="mt-2">
                <span className="badge badge-danger mb-2">2 Hours</span>
                <br/>
                <span className="badge badge-danger mb-2">1 Large Pizza</span>
                <br/>
                <span className="badge badge-danger mb-2">1 Soda (2-liter)</span>
              </div>
            </h4>
          </div>
        </Card>
        <Card title="PARTY PACKAGE" name="partyPackage">
          <div className="col">
            <h4>10 Jumpers $239.95<br/>
              <div className="mt-2">
                <span className="badge badge-warning mr-2">2 Large Pizza</span>
                <span className="badge badge-warning">2 Soda (2-liter)</span>
              </div>
            </h4>
            <hr/>
            <h4>20 Jumpers $389.95
              <div className="mt-2">
                <span className="badge badge-danger mr-2">4 Large Pizza</span>
                <span className="badge badge-danger">4 Soda (2-liter)</span>
              </div>
            </h4>
            <hr/>
            <h5>Includes:</h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">2 hours jumping</li>
              <li className="list-group-item list-group-item-secondary">Bottle of water for each jumper</li>
              <li className="list-group-item list-group-item-success">Full service clean up & set up</li>
              <li className="list-group-item list-group-item-danger">Table cover, plates, cups, napkins and forks</li>
              <li className="list-group-item list-group-item-warning">1 Free SKYPARKKIDS T-Shirts for the birthday child</li>
              <li className="list-group-item list-group-item-info">1 hour Free jump pass for the birthday child</li>
              <li className="list-group-item list-group-item-light">to use on any future visit</li>
            </ul>
            <div className="text-left mt-4">
              <p className="lead text-secondary">* Note: Birthday Party reservation must be
                made in person at the store. Online or phone reservations are not accepted at
                the moment.{" "}
                <a className="text-danger" href={pdfFile} target="_blank">Party Package Reservation Form</a>
              </p>
              <p className="lead mt-4 font-weight-bold text-primary">There will be Special
                Sales for Birthday Party reservation during August and September.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;