import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_TOPIC = 'SELECT_TOPIC'
export const INVALIDATE_TOPIC = 'INVALIDATE_TOPIC'

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic
  }
}

export function invalidateTopic(topic) {
  return {
    type: INVALIDATE_TOPIC,
    topic
  }
}

function requestPosts(topic) {
  return {
    type: REQUEST_POSTS,
    topic
  }
}

function receivePosts(topic, json) {
  return {
    type: RECEIVE_POSTS,
    topic,
    posts: json.items.map(child => child.title),
    receivedAt: Date.now()
  }
}

function fetchPosts(topic) {
  return dispatch => {
    dispatch(requestPosts(topic))
    return fetch (`https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.nos.nl%2F${topic}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(topic, json)))
  }
}

function shouldFetchPosts(state, topic) {
  const posts = state.postsByTopic[topic]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(topic) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), topic)) {
      return dispatch(fetchPosts(topic))
    }
  }
}
