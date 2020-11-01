import React, {Component, Fragment} from 'react';



// import header_img from './../../resources/img/illustration.png'; //Header Image

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>

        <div id="header_section">
          <div className="container">
            <div className="main">
              <div className="one">
                <h1>
                  Be an artist , &nbsp;
                  <br/> 
                  think like a startup
                </h1>
              </div>
              <div className="two">
                <img src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg" alt=""/>
              </div>
              <div className="three">
                <p>
                  We are a community of graduate student entrepreneurs and creatives from Russell
                  Group universities. We have real-world experience utilising many of the basic
                  "test-and-iterate" techniques from working.
                </p>
                
              </div>

              <div className="four">
              <a href="google.com">
                  <button className="enroll-btn">Enroll Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Header
