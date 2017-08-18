import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
	selectTopic,
	fetchPostsIfNeeded,
	invalidateTopic
} from '../actions'
import Posts from './Posts'

import { Glyphicon } from 'react-bootstrap'

const propTypes = {
	selectedTopic: PropTypes.string.isRequired,
	posts: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
}

class Headlines extends Component {
	componentWillMount() {
		const { url } = this.props.match
		let topic = (this.props.match.url !== '/') ? this.props.match.url.replace(/^\/+/g, '') : 'nosnieuwsalgemeen'
		this.handleChange(topic)

		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	//Ok for some reason no errors when this code is moved to componentWillMount
	//Will not yet trigger re-render
	//So I think it's better in ther particular case. 
	constructor(props) {
		super(props)
		// const { url } = this.props.match
		// let topic = (this.props.match.url !== '/') ? this.props.match.url.replace(/^\/+/g, '') : 'nosnieuwsalgemeen'
		// this.handleChange(topic)

		// this.handleChange = this.handleChange.bind(this)
		// this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch, selectedTopic } = this.props
		dispatch(fetchPostsIfNeeded(selectedTopic))
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedTopic !== prevProps.selectedTopic) {
			const { dispatch, selectedTopic } = this.props
			dispatch(fetchPostsIfNeeded(selectedTopic))
		}
	}

	handleChange(nextTopic) {
		const { dispatch, selectedTopic } = this.props
		dispatch(selectTopic(nextTopic))
		dispatch(invalidateTopic(selectedTopic))
		dispatch(fetchPostsIfNeeded(nextTopic))
	}

	handleRefreshClick(e) {
		e.preventDefault()

		const { dispatch, selectedTopic } = this.props
		dispatch(invalidateTopic(selectedTopic))
		dispatch(fetchPostsIfNeeded(selectedTopic))
	}

	render () {
		const { posts, isFetching, lastUpdated } = this.props
		return (
			<div>
				<p>
					{lastUpdated &&
					<span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</span>}
					{!isFetching &&
					<a href="" onClick={this.handleRefreshClick}> <br /><Glyphicon glyph="refresh" /> Refresh</a>}
				</p>

				{isFetching && posts.length === 0 && <h2>Loading...</h2>}
				{!isFetching && posts.length === 0 && <h2>Empty.</h2>}
				{posts.length > 0 &&
				<div style={{ opacity: isFetching ? 0.5 : 1 }}>
				<Posts posts={posts} />
				</div>}
			</div>
		)
	}
}

Headlines.propTypes = propTypes

export default Headlines
