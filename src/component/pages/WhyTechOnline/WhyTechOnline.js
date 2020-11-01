import React, {Component, Fragment} from 'react';

class WhyTechOnline extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <title>About Us</title>
        <div id="about_us">

          <div className="container">
            <div className="main">
              
              <h2>Why we teach online</h2>
              <img src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg" alt="this is a WTO"/>

              <p>Lean Mozart was founded with a rebellious spirit and a loftygoal: to help
                future generations rediscover a love for lifelong learning from amateur to
                entrepreneur.
                <br/>
                As a Bachelor student in Computer Science, Management and Business, I was
                awarded the prestigious Fulbright USA scholarship following an internship at
                Goldman Sachs. During the year-long study abroad, I learned about the Lean
                Startup methodology championed in Silicon Valley.
                <br/><br/>Upon returning to the UK for a summer position at Google, my network
                  grew to include other like-minded students at Facebook, Microsoft, Apple, and
                  soon Lean Mozart was born. I received a Master's scholarship to study
                  Human-computer Interaction at UCL, during which I became a Student Mentor,
                  Private Tutor, and Teaching Assistant.</p>

            </div>
          </div>
        </div>
        
      </Fragment>
    )
  }
}

export default WhyTechOnline
