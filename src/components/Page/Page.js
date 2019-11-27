import React, { Component } from 'react'
import Post from '../Post/Post'

class Page extends Component {
  render () {
    return this.props.page.map((post) => (
      <Post key={post.id} id={post.id} title={post.title} thumbnail={post.thumbnail} url={post.url} ups={post.ups} />
    ))
  }
}

export default Page
