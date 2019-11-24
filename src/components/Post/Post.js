import React, { Component } from 'react'

class Post extends Component {
  render () {
    return (
      <div>
        <a target="_blank" rel="noopener noreferrer" href={ this.props.url} >{this.props.title} </a>
      </div>
    )
  }
}

export default Post
