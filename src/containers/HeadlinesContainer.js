import React, { Component } from 'react'
import { connect } from 'react-redux'
import Headlines from '../components/Headlines'

class HeadlinesContainer extends Component {
	render() {
		return (<Headlines {...this.props} />)
	}
}

function mapStateToProps(state) {
	const { selectedTopic, postsByTopic } = state
	const {
		isFetching,
		lastUpdated,
		items: posts
	} = postsByTopic[selectedTopic] || {
		isFetching: true,
		items: []
	}

	return {
		selectedTopic,
		posts,
		isFetching,
		lastUpdated
	}
}

export default connect (mapStateToProps)(HeadlinesContainer)
