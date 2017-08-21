import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './app.css'


class App extends Component {
	constructor () {
		super()
		console.log("Not yet implemented. ")
	}

	undo() {
		console.log("Not yet implemented. ")
	}

	newPerson() {
		console.log("Not yet implemented. ")
	}

	removeLast() {
		console.log("Not yet implemented. ")
	}

	render () {
		return (
			<div>
				<Button bsStyle="primary"> Add Person </Button>
				<Button bsStyle="primary"> Remove </Button>
				<Button bsStyle="primary"> Undo </Button>
				
				<h1>The List</h1>
				<People  />
			</div>
		)
	}
}

const People = () => {
	return(
		<hr />
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
