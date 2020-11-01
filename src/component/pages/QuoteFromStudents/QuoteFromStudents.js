import React, {Component, Fragment} from 'react';
import Slider from "react-slick";

class QuoteFromStudents extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {

    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 3500,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      pauseOnHover: true,
      centerMode: true,
      centerPadding: '200px'
    }

    return (
      <Fragment>
        <div id="student_quote">
          <div className="container">
            <h2>Quote from our lovely
              <br/>
              student</h2>
          </div>
          <Slider className="container_fluid" ref={c => (this.slider = c)} {...settings}>

            <div className="single_container">
              <div className="single_item">
                <p>Just started week 4 and I'm amazed how much I've learnt already. I'm enjoying it so much that I've
                    decided to do also the WordPress course after I finish this one :</p>

                    <div className="bottom">
                      <img src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg" alt=""/>
                      <h3>Name</h3>
                    </div>
              </div>
            </div>

            <div className="single_container">
              <div className="single_item">
              <p>Just started week 4 and I'm amazed how much I've learnt already. I'm enjoying it so much that I've
                    decided to do also the WordPress course after I finish this one :</p>

                    <div className="bottom">
                      <img src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg" alt=""/>
                      <h3>Name</h3>
                    </div>
              </div>
            </div>

          </Slider>

        </div>
      </Fragment>
    )
  }
}

export default QuoteFromStudents
