import React, {Component, Fragment} from 'react';
import AboutTutorSingle from './AboutTutorSingle';

class AboutTutors extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <title>Tutors</title>
        <div id="tutor_section">
          <div className="container">
            <div className="main">
              <div className="left">
                <h2>About Tutors</h2>
                <p>Lean Mozart is a better alternative to traditional tuition and education,
                  with accelerated learning and mentoring designed to nurture creative founders.
                  We believe in curiosity, independence, and experimentation as a means of helping
                  the next-generation get from Z to A.</p>
              </div>
              <div className="right">
                <AboutTutorSingle 
                name="Micheal John"
                ImgLink="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg" 
                twitterLink="#"
                linkedinLink="#"
                desc="Micheal John is a full-stack web developer and teacher who has also taught over a thousand people how to
                code. He was previously an instructor at London code school Steer.
                
                He has taught several thousand people over the last 6 years."
                />

                <AboutTutorSingle 
                name="Navana Gomes"
                ImgLink="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg"
                twitterLink="#"
                linkedinLink="#"
                desc="Navana Gomes is a full-stack web developer and teacher who has also taught over a thousand people how to
                code. He was previously an instructor at London code school Steer.
               
                He has taught several thousand people over the last 6 years." 
                />
              </div>
            </div>
          </div>
        </div>


      </Fragment>

    )
  }
}

export default AboutTutors;