import React, {Component, Fragment} from 'react';
import Close from '../../resources/icon/close.svg'

export default class Abouttutorsingle extends Component {
  constructor(props) {
    super(props)
    // binding this keyword with method
    this.flip = this
      .flip
      .bind(this);
    this.flipBack = this
      .flipBack
      .bind(this);

    this.state = {
      turn: false
    }

    this.handleEvent = this
      .handleEvent
      .bind(this)
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler()
    }
  }

  componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState()
  }

  flip() {
    this.setState({turn: true})

  }
  flipBack() {

    this.setState({turn: false})
  }

  render() {

    return (
      <Fragment>

        <div
          className="box"
          onMouseMove={this.flip}
          onMouseEnter={this.flip}
          onMouseOut={this.flipBack}>
          <div
            className={"front " + (!this.state.turn
            ? 'default'
            : "turned")}>

            <img src={this.props.ImgLink} alt=""/>

            <h3>{this.props.name}</h3>
          </div>
          <div
            className={"back " + (!this.state.turn
            ? 'default'
            : "turned")}>
            <img
              onMouseMove={this.flip}
              onMouseOver={this.flip}
              onClick={this.flipBack}
              src={Close}
              alt="close Icon"/>
            <p>{this.props.desc}</p>
            <div className="social-box">

              <a href={this.props.twitterLink}>
                <span>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="my-path"
                      d="M4.71738 12.9999C10.378 12.9999 13.4736 7.99887 13.4736 3.66234C13.4736 3.52031 13.4708 3.37886 13.4649 3.23819C14.0657 2.7749 14.5879 2.19678 15 1.53873C14.4486 1.80021 13.8551 1.976 13.2327 2.05553C13.868 1.64908 14.3559 1.00639 14.5859 0.24025C13.9913 0.616178 13.3328 0.889296 12.6318 1.03681C12.0702 0.398916 11.2706 0 10.3853 0C8.68586 0 7.30759 1.46967 7.30759 3.28133C7.30759 3.53899 7.33465 3.78941 7.3874 4.02966C4.82965 3.89242 2.56151 2.5866 1.04381 0.60082C0.779625 1.08572 0.627167 1.64917 0.627167 2.25039C0.627167 3.38883 1.17049 4.39415 1.99662 4.98205C1.49173 4.96552 1.01748 4.81771 0.602858 4.57169C0.6024 4.58548 0.6024 4.59889 0.6024 4.61356C0.6024 6.20296 1.66318 7.53001 3.07153 7.83072C2.81285 7.90575 2.54068 7.94615 2.25998 7.94615C2.06203 7.94615 1.86903 7.92541 1.68153 7.88696C2.07331 9.19093 3.2095 10.1398 4.55648 10.1664C3.50313 11.0468 2.17623 11.5712 0.734126 11.5712C0.486084 11.5712 0.240886 11.5561 0 11.5257C1.36203 12.4567 2.97934 13 4.71747 13"/>
                  </svg>

                </span>
              </a>

              <a href={this.props.linkedinLink}>
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="my-path"
                      d="M2.01173 0.211914C0.836649 0.211914 0.0683594 0.983529 0.0683594 1.99771C0.0683594 2.98949 0.813762 3.78312 1.96664 3.78312H1.98894C3.187 3.78312 3.9326 2.98949 3.9326 1.99771C3.9102 0.983529 3.187 0.211914 2.01173 0.211914Z"/>
                    <path className="my-path" d="M0.271484 5.19336H3.70673V15.5284H0.271484V5.19336Z"/>
                    <path
                      className="my-path"
                      d="M12.1386 4.95117C10.2854 4.95117 9.04277 6.69256 9.04277 6.69256V5.19374H5.60742V15.5288H9.04257V9.75731C9.04257 9.44833 9.06497 9.13984 9.15574 8.91889C9.40407 8.30191 9.96921 7.66273 10.9183 7.66273C12.1613 7.66273 12.6585 8.6105 12.6585 9.99988V15.5288H16.0934V9.60287C16.0934 6.42838 14.3986 4.95117 12.1386 4.95117Z"/>
                  </svg>

                </span>
              </a>

            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}
