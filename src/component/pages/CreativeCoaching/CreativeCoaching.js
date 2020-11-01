import React, {Component, Fragment} from 'react'

class CreativeCoaching extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div id="creativeCoachingSection">
          <div className="container">
            <div className="main">
              <div className="images">
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg"
                  alt="this is gallery"/>
              </div>
              <h2>Creative Coaching</h2>
              <div className="points">
                <div className="service-elelment">
                  <div className="circle">
                    <span>1</span>
                  </div>
                  <p>Entrepreneurial mindset</p>
                </div>
                <div className="service-elelment">
                  <div className="circle">
                    <span>2</span>
                  </div>
                  <p>Entrepreneurial mindset</p>
                </div>
                <div className="service-elelment">
                  <div className="circle">
                    <span>3</span>
                  </div>
                  <p>Entrepreneurial mindset</p>
                </div>
                <div className="service-elelment">
                  <div className="circle">
                    <span>4</span>
                  </div>
                  <p>Entrepreneurial mindset</p>
                </div>
                <div className="service-elelment">
                  <div className="circle">
                    <span>5</span>
                  </div>
                  <p>Entrepreneurial mindset</p>
                </div>
                <div className="service-elelment">
                  <div className="circle">
                    <span>6</span>
                  </div>
                  <p>Entrepreneurial mindset</p>
                </div>
                <div className="service-elelment">
                  <div className="circle">
                    <span>7</span>
                  </div>
                  <p>Entrepreneurial mindset</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default CreativeCoaching
