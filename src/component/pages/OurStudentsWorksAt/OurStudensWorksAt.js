import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import adidas from '../../resources/img/adidas.png';
import airbnb from '../../resources/img/airbnb.png';
import google from '../../resources/img/google.png';

class OurStudensWorksAt extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {

    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            autoplay: true,
            draggable: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 768,
          settings: {
            autoplay: true,
            draggable: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 576,
          settings: {
            autoplay: true,
            draggable: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
        <div id="ourStudentsWorksAt">

          <div className="container">
            <h3>Our students work at..</h3>
            <div className="slider_area">

              <Slider ref={c => (this.slider = c)} {...settings}>

                <div className="slider_item">
                  <div className="box">
                    <img src={adidas} alt=""/>
                  </div>
                </div>

                <div className="slider_item">
                  <div className="box">
                    <img src={airbnb} alt=""/>
                  </div>
                </div>

                <div className="slider_item">
                  <div className="box">
                    <img src={google} alt=""/>
                  </div>
                </div>

                <div className="slider_item">
                  <div className="box">
                    <img src={adidas} alt=""/>
                  </div>
                </div>

                <div className="slider_item">
                  <div className="box">
                    <img src={airbnb} alt=""/>
                  </div>
                </div>

                <div className="slider_item">
                  <div className="box">
                    <img src={google} alt=""/>
                  </div>
                </div>

              </Slider>

            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default OurStudensWorksAt
