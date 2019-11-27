import React, { Component, Fragment } from 'react'
import Page from '../Page/Page'
import Header from '../Header/Header'
import Subreddit from '../Subreddit/Subreddit'
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
      page: [],
      subreddit: 'All'
    }

    loadPosts = (sub) => {
      r.getTop(sub)
        .then(result => {
        this.setState({ page: Array.from(result) })
      })
    }

    handleEnter = event => {
        if (event.key === 'Enter') {
          this.setState({ subreddit: event.target.value });
          this.loadPosts(event.target.value);
        }
      }

    componentDidMount = () => {
      this.loadPosts(this.state.subreddit)
    }

    render () {
      return (
        <Fragment>
          <Header />
          <main className="container">
            <Subreddit handleEnter={this.handleEnter} currentSub={this.state.subreddit} />
            <Page page={this.state.page} />
          </main>
        </Fragment>
      )
    }
}

export default App
