import React, { Component } from 'react'
import ExternalComponent from './External'
import './app.css'

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
		/**
		 * Components can be used as custom HTML tags. 
		 *
		 * ExternalComponent is only rendered when show is true. 
		 * Unrendered external files are not loaded into the browser until required.
		 * Therefore codesplitting improves performance 
		 */
		let show = true 
		return (
			<div>
				<h1>Hello World!</h1>
				<hr />
				<MyClass />
				<MyElement />
				<AnotherNotation />
				{ show && 
				<ExternalComponent />}
			</div>
		)
	}
}

/**
 * Another example, this Component is used as follows: 
 * <Myclass />
 */ 
class MyClass extends Component {
	myFunction () {
		return (
			<p>MyFunction</p>
		)
	}

	render () {
		return (
			<div>
				<p>MyClass Instance</p>
				{this.myFunction()}
			</div>
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
