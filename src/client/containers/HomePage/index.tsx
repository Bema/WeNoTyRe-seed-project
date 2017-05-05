import * as React from 'react'
import { connect } from 'react-redux'
import { Logo } from '../../components'

import './styles.css'

interface IHomePageProps {
  pageContent: object
}

class HomePage extends React.Component<IHomePageProps, void> {
  public render() {
    return (
      <div className="home-page">
        <Logo />
        <h1>WeNoTyRe</h1>
        <p>Just another optionated seed project</p>

        <h3>The stack</h3>
        <strong>Server</strong>
        <ul>
          <li>Typescript</li>
          <li>NodeJS</li>
        </ul>

        <strong>Client</strong>
        <ul>
          <li>Webpack</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Redux</li>
          <li>StyleLint</li>
          <li>TypescriptLint</li>
        </ul>

        <h3>Environments</h3>
        <p>Both server and client have `development` and
        `production` environments.</p>

        <h3>Installation</h3>
        <code>npm install</code>

        <h3>Development</h3>
        <code>npm run dev</code>
        <p>Starts both server and client in development mode.</p>

        <h3>Build</h3>
        <code>npm run build</code>
        <p>Builds both apps for production to the /build folder</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pageContent: state.pagesReducer.home || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
