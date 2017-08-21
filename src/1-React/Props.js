import React, { Component } from 'react'

class PropsExample extends Component {
	constructor () {
		super()

		this.state = {
			content: "Some text from state"
		}
	}

	render () {
		return  (
			<div>
				<p>Props Example</p>
				<MyComponent content="Some text from props" />
				{this.state.content}
				<MyComponent content={this.state.content} />
			</div>
		)
	}
}

class MyComponent extends Component {
	render () {
		console.log(this.props)
		return (
			<p>{this.props.content}</p>
		)
	}
}

export default PropsExample
