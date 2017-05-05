import * as React from 'react'
import { connect } from 'react-redux'

class NotFoundPage extends React.Component<any, void> {
  public render() {
    const { pathname } = this.props.location

    return (
      <div className="error-page">
        <h1>Page '{ pathname }' Not Found</h1>
      </div>
    )
  }
}

export default connect()(NotFoundPage)
