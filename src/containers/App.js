import React, { Component } from 'react'
import { connect } from 'react-redux'
import includes from 'lodash/includes'
import classNames from 'classnames'
import { Route } from 'react-router-dom'
import Boot from './Boot.js'
import Home from './Home.js'
import Output from './Output.js'
import Sprite from './Sprite.js'
import Map from './Map.js'
import Phrase from './Phrase.js'
import Chain from './Chain.js'
import Song from './Song.js'
import Tutorial from './Tutorial.js'
import Run from './Run.js'
import Code from './Code.js'
import Help from './Help.js'
import Shelf from './Shelf.js'
import TopBar from '../components/TopBar.js'
import ErrorBoundary from '../components/ErrorBoundary.js'
import screenTypes from '../utils/screenTypes.js'
import { getScreenType } from '../utils/location.js'
import { version } from '../iframe/package.json'
import '../css/App.css'

console.log(JSON.stringify(`SCRIPT-8 app v ${version}`, null, 2))

const mapStateToProps = ({ tutorial }) => ({
  tutorial
})

const mapDispatchToProps = () => ({})

class App extends Component {
  constructor (props) {
    super(props)
    this.tutorialElement = React.createRef()
    this.appElement = null
    this.setAppElementRef = e => {
      this.appElement = e
    }
  }

  componentDidUpdate () {
    // Get the tutorial's height and set App's padding-bottom to this.
    if (this.tutorialElement && this.tutorialElement.current) {
      const { clientHeight } = this.tutorialElement.current
      this.appElement.style.paddingBottom = `${clientHeight}px`
    } else {
      this.appElement.style.paddingBottom = '0'
    }
  }

  render () {
    const { tutorial, location } = this.props
    const screen = getScreenType(location)
    return (
      <ErrorBoundary>
        <div
          ref={this.setAppElementRef}
          className={classNames('App', `App-${screen}`, {
            'full-height': includes(
              [screenTypes.BOOT, screenTypes.RUN, screenTypes.CODE],
              screen
            )
          })}
        >
          <TopBar />
          <Route exact path='/' component={Home} />
          <Route path='/code' component={Code} />
          <Route path='/sprite' component={Sprite} />
          <Route path='/map' component={Map} />
          <Route path='/phrase' component={Phrase} />
          <Route path='/chain' component={Chain} />
          <Route path='/song' component={Song} />
          <Route path='/run' component={Run} />
          <Route path='/help' component={Help} />
          <Route path='/shelf' component={Shelf} />

          <Output />
          {tutorial ? (
            <Tutorial
              className={classNames({
                'in-RUN': screen === screenTypes.RUN
              })}
              tutorialRef={this.tutorialElement}
            />
          ) : null}
        </div>
      </ErrorBoundary>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
