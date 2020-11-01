import React, {Component, Fragment} from 'react';
import Close from '../../resources/icon/close.svg'

export default class Curriculamslidersingle extends Component {
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
      title: this.props.title,
      photo: this.props.photo,
      desc: this.props.desc,

      turn: false
    }

  }

  flip() {
    this.setState({turn: true})

  }
  flipBack() {
    //   alert(this.state.title)

    this.setState({turn: false});
  }

  render() {

    // const
    return (
      <Fragment>
        <div id="currriculamslidesingle">
          <div className="mybox" >
            <div
              className={"front " + (!this.state.turn
              ? 'default'
              : "turned")}>

              <img
                src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033215.svg"
                alt="this is gallery"/>
              <h3>{this.props.title}</h3>
              <h4 onClick={this.flip}>learn more</h4>
            </div>
            <div
              onMouseMove={this.flip}  
              onMouseOver={this.flip}
              onMouseOut={this.flipBack}
              className={"back " + (!this.state.turn
              ? 'default'
              : "turned")}>
              
               <img onMouseMove={this.flip}  onMouseOver={this.flip} onClick={this.flipBack} src={Close} alt="close Icon"/>
            
              <p onMouseOver={this.flip}>{this.props.desc}</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
