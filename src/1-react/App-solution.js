import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './app.css'


class App extends Component {
	constructor () {
		super()
		this.state = {
			people: [
				{name:"Edwin", age:24},
				{name: "Not Edwin", age:23}],
			history: []
		}
	}

	undo() {
		if (this.state.history.length !== 0) {
			this.setState({
				people: this.state.history
			})
		}
	}

	newPerson() {
		// slice() is needed to craete a copy by value, rather than passing by ref.
		this.setState({
			history: this.state.people.slice(), 
			people: this.state.people.concat({name: randStr(), age: Math.floor(Math.random() * 100)}),
		})
	}

	removeLast() {
		this.setState({
			history: this.state.people.slice(),
			people: this.state.people.slice(1, this.state.people.length)
		})
		console.log(this.state.history)
	}


	render () {
		const { people } = this.state
		return (
			<div>
				<Button bsStyle="primary" onClick={() => this.newPerson()}> Add Person </Button>
				<Button bsStyle="primary" onClick={() => this.removeLast()}> Remove </Button>
				<Button bsStyle="primary" onClick={() => this.undo()}> Undo </Button>
				<h1>List of people</h1>
				<People people={people} />
			</div>
		)
	}
}

const People = ({people}) => {
	let list = []
	for (let i in people) {
		list.push(
			<div key={i}>
				<hr/>
				<p>Name: {people[i].name} <br />
				Age: {people[i].age}</p>
			</div>)
	}

	return(
		<div>
			{list}
		</div>
	)
}

function randStr() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default App
