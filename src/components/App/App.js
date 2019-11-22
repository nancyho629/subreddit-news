import React, { Component, Fragment } from 'react'

import Header from '../Header/Header'

class App extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <Fragment>
        <Header />
        <main className="container">
        </main>
      </Fragment>
    )
  }
}

export default App
