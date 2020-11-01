import React, {Component, Fragment} from 'react';

class ConsultWithUs extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <title>Conact Us</title>

        <div id="contact">
          <div className="container">
            <h2>Consult with Us</h2>
            <form>
              <input className="uname" type="text" placeholder="Name"/>
              <input className="email" type="email" placeholder="Email-address"/>
              <textarea className="desc" placeholder="Write Message"></textarea>
              <div className="btn">
                <button type="submit">Send</button>
              </div>

            </form>
          </div>
        </div>

      </Fragment>
    )
  }
}

export default ConsultWithUs
