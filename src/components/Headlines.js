import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
	selectSubreddit,
	fetchPostsIfNeeded,
	invalidateSubreddit
} from '../actions'
import Posts from './Posts'

import { Glyphicon } from 'react-bootstrap'

const propTypes = {
	selectedSubreddit: PropTypes.string.isRequired,
	posts: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
}

class Headlines extends Component {
	constructor(props) {
		super(props)

		if(this.props.match.url !== '/'){
			this.handleChange(this.props.match.url)
		} else {
			this.handleChange('/all')
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch, selectedSubreddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
			const { dispatch, selectedSubreddit } = this.props
			dispatch(fetchPostsIfNeeded(selectedSubreddit))
		}
	}

	handleChange(nextSubreddit) {
		const { dispatch, selectedSubreddit } = this.props
		dispatch(selectSubreddit(nextSubreddit))
		dispatch(invalidateSubreddit(selectedSubreddit))
		dispatch(fetchPostsIfNeeded(nextSubreddit))
	}

	handleRefreshClick(e) {
		e.preventDefault()

		const { dispatch, selectedSubreddit } = this.props
		dispatch(invalidateSubreddit(selectedSubreddit))
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	render () {
		const { posts, isFetching, lastUpdated } = this.props
		return (
			<div>
				<p>
					{lastUpdated &&
					<span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</span>}
					{!isFetching &&
					<a href="" onClick={this.handleRefreshClick}> <Glyphicon glyph="refresh" />Refresh</a>}
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
