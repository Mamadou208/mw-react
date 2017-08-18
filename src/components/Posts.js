import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

export default class Posts extends Component {
  render() {
  	console.log(this.props.posts)
    return (
      <div>
        {this.props.posts.map((item, i) => <Message key={i} item={item} />)}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
