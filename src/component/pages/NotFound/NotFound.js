import React, {Component, Fragment} from 'react'

class NotFound extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div id="not_found">
            <div className="container">
            <p>
            404 Not Found
            </p>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default NotFound
