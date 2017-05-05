import * as React from 'react'
import { connect } from 'react-redux'

import './styles.css'

interface IAboutPageProps {
  pageContent: object
}

class AboutPage extends React.Component<IAboutPageProps, void> {
  public render() {
    return (
      <div className="about-page">
        <h1>About Page</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage)
