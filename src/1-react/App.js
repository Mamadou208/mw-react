import React, { Component } from 'react'

/**
 * Example structure of a React Component. 
 */
class App extends Component {

	/**
	 * When called, it should examine this.props and this.state and return a single React element. 
	 * This element can be either a representation of a native DOM component, such as <div />, 
	 * or another composite component that you've defined yourself.
	 */
	render () {
		return (
			<div>
				<h1>Hello World!</h1>
				<MyClass />
				<MyElement />
				<AnotherNotation />
			</div>
		)
	}
}

class MyClass extends Component {
	render () {
		return (
			<p>MyClass Instance</p>
		)
	} 
}

const MyElement = () => {
	// Still room for some logic here. 
	return(
		<p>MyElement Instance</p>
	)
}

const AnotherNotation = () => (
	<p>AnotherNotation Instance</p>
)

//Exported elements can be imported in other files and used the same way as shown above. 
export default App
