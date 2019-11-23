import React, { Component, Fragment } from 'react'
import Page from '../Page/Page'
import Header from '../Header/Header'
import snoowrap from 'snoowrap'

/* eslint-disable */
const r = new snoowrap({
  userAgent: 'technical_webapp',
  clientId: 'whG9u7l3aSFBgw',
  clientSecret: 'cRRP17VUmSDSxV6_EW4Yquj3voA',
  refreshToken: '355032871146-s9rhGldwH4zm_0Axnwpo_aZC_Vw'
})

class App extends Component {
    state = {
      page: []
    }

    componentDidMount () {
      r.getHot().then(result => {
        this.setState({ page: result })
      })
    }

    render () {
      return (
        <Fragment>
          <Header />
          <main className="container">
            <Page page={this.state.page} />
          </main>
        </Fragment>
      )
    }
}

export default App
