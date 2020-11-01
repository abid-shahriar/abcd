import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import Curriculamslidersingle from './Curriculamslidersingle'

class OurCurriculam extends Component {
  constructor(props) {
    super(props)

    // bind with this keywork
    this.next = this
      .next
      .bind(this);
    this.previous = this
      .previous
      .bind(this);

    this.state = {}
  }

  next() {
    this
      .slider
      .slickNext();

  }
  previous() {
    this
      .slider
      .slickPrev();
  }

  render() {

    const settings = {
      dots: false,
      infinite: true,
      arrows:false,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            draggable: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 768,
          settings: {
            draggable: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 576,
          settings: {
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

        <div id="ourCurriculamnSection">
          <div className="container">

            <div className="topSection">
              <div className="left">
                <h2 className="SectionTitle">Our Curriculam</h2>

                <p className="SectionDescription">
                  Our curriculum is devised to teach a firm foundation in computer science, above
                  and beyond the National Curriculum requirements.
                </p>
              </div>
              <div className="right">
                <button className="button" onClick={this.previous}>
                  <svg
                    width="37"
                    height="23"
                    viewBox="0 0 37 23"
                    fill="#ddddd"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6562 2.67334C13.2794 2.07068 13.2794 1.06625 12.6562 0.463585C12.0485 -0.154528 11.0357 -0.154528 10.428 0.463585L0.455763 10.338C-0.151921 10.9561 -0.151921 11.9451 0.455763 12.5632L10.428 22.4375C11.0357 23.0557 12.0485 23.0557 12.6562 22.4375C13.2794 21.8349 13.2794 20.8304 12.6562 20.2278L5.39514 13.0268L34.8288 13.0268C35.7014 13.0268 36.4026 12.3159 36.4026 11.4506C36.4026 10.5852 35.7014 9.87437 34.8288 9.87437L5.39514 9.87437L12.6562 2.67334Z"/>
                  </svg>
                </button>
                <button className="button" onClick={this.next}>
                  <svg
                    width="37"
                    height="23"
                    viewBox="0 0 37 23"
                    fill="#ddddd"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.7462 20.3267C23.1229 20.9293 23.1229 21.9338 23.7462 22.5364C24.3538 23.1545 25.3667 23.1545 25.9743 22.5364L35.9466 12.662C36.5543 12.0439 36.5543 11.0549 35.9466 10.4368L25.9743 0.562462C25.3667 -0.0556526 24.3538 -0.0556526 23.7462 0.562462C23.1229 1.16512 23.1229 2.16956 23.7462 2.77222L31.0072 9.97325L1.5735 9.97325C0.700928 9.97325 -0.000244141 10.6841 -0.000244141 11.5494C-0.000244141 12.4148 0.700928 13.1256 1.5735 13.1256L31.0072 13.1256L23.7462 20.3267Z"/>
                  </svg>
                </button>
              </div>
            </div>

            <Slider ref={c => (this.slider = c)} {...settings}>

              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 1"
                    photo="photo 1"
                    desc="description 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 2"
                    photo="photo 2"
                    desc="description 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 3"
                    photo="photo 3"
                    desc="description 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 4"
                    photo="photo 4"
                    desc="description 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 5"
                    photo="photo 5"
                    desc="description 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 6"
                    photo="photo 6"
                    desc="description 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 7"
                    photo="photo 7"
                    desc="description 7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 8"
                    photo="photo 8"
                    desc="description 8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 9"
                    photo="photo 9"
                    desc="description 9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 10"
                    photo="photo 10"
                    desc="description 10"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 11"
                    photo="photo 11"
                    desc="description 11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>
              <div>
                <div className="singleSliderItem">
                  <Curriculamslidersingle
                    title="Course Title 12"
                    photo="photo 12"
                    desc="description 12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis, eveniet illo deleniti nostrum, molestiae explicabo impedit aliquam dolorum eligendi perferendis commodi fugiat autem neque accusamus cupiditate esse odit haru"/>
                </div>
              </div>

            </Slider>

          </div>

        </div>
      </Fragment>
    )
  }
}

export default OurCurriculam
