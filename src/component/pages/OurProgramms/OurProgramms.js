import React, { Component, Fragment } from "react";

class OurProgramms extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <title>Programms</title>
        <div id="ourProgrammsSection">
          <div className="container">
            <h2>Our Programs</h2>
            <p>
              We run a 12 week programme that seeks to inspire and enable the
              next generation of founders.
            </p>
            <div className="bottom-area">
              <div className="box">
                <div className="round">
                  <span>1</span>
                </div>
                <h4>Cultivate</h4>
                <p>
                  Meet and match with a mentor, explore pathways, problems and
                  opportunities. Breakdown broader vision into smaller actions
                </p>
              </div>
              <div className="box">
                <div className="round">
                  <span>2</span>
                </div>
                <h4>Incubate​</h4>
                <p>
                  Understand lean startup methodology, test assumptions and
                  outline a business idea/plan. Create an MVP/MLP and cycle
                  build-measure- learn loop.
                </p>
              </div>
              <div className="box">
                <div className="round">
                  <span>3</span>
                </div>
                <h4>Accelerate​</h4>
                <p>
                  Gain traction with users, test and improve your product or
                  service, identify a clear business model and market
                  opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OurProgramms;
