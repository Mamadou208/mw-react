import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'

class PropsExample extends Component {
	constructor () {
		super()

		this.state = {
			content: "Some text from state"
		}
	}

	changeText() {
		this.setState({
			content: "Now it's changed!",
		}) 
	}

	render () {
		return  (
			<div>
				<p>Props Example</p>
				<Button bsStyle="primary" onClick={() => this.changeText()}> Change </Button>
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

const NumberLine = ({x}) => {
	let prev = x-1
	let next = x+1
	return (
		<Table>
			<thead>
				<tr>
					<th>Previous</th>
					<th>Current</th>
					<th>Next</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{prev}</td>
					<td>{x}</td>
					<td>{next}</td>
				</tr>
			</tbody>
		</Table>
	)
}

export default PropsExample
