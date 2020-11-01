import React, {Component, Fragment} from 'react'
import FaqSingleItem from './FaqSingleItem';

class AskUSAnything extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div id="askUsAnything">
          <div className="container">
            <div className="main">
              <h2>Ask us anything</h2>

              <div className="acc">
                <FaqSingleItem/>
              
               
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}

export default AskUSAnything
