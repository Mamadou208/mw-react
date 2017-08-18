import React, { Component } from 'react'
import { connect } from 'react-redux'
import Headlines from '../components/Headlines'

class HeadlinesContainer extends Component {
	render() {
		return (<Headlines {...this.props} />)
	}
}

function mapStateToProps(state) {
	const { selectedSubreddit, postsBySubreddit } = state
	const {
		isFetching,
		lastUpdated,
		items: posts
	} = postsBySubreddit[selectedSubreddit] || {
		isFetching: true,
		items: []
	}

	return {
		selectedSubreddit,
		posts,
		isFetching,
		lastUpdated
	}
}

export default connect (mapStateToProps)(HeadlinesContainer)
