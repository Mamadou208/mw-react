import React from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

import { Tab, Tabs } from 'react-bootstrap'

import HeadlinesContainer from '../containers/HeadlinesContainer'

const App = () => {
	return (
		<Router>
			<div>
				{tabsInstance}
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/reactjs">Reactjs</Link></li>
					<li><Link to="/programming">Programming</Link></li>
				</ul>
				<Route exact path="/" component={HeadlinesContainer}/>
				<Route path="/reactjs" component={HeadlinesContainer}/>
				<Route path="/programming" component={HeadlinesContainer}/>
			</div>
		</Router>
	)
}

const tabsInstance = (
	<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={this.handleSelect}>
		<Tab eventKey={1} title="Tab 1"><Redirect to="/" /></Tab>
		<Tab eventKey={2} title="Tab 2"><Redirect to="/reactjs" /></Tab>
		<Tab eventKey={3} title="Tab 3"><Redirect to="/programming" /></Tab>
	</Tabs>
)

//<ul>
//	<li><Link to="/">Home</Link></li>
//	<li><Link to="/reactjs">Reactjs</Link></li>
//	<li><Link to="/programming">Programming</Link></li>
//</ul>

export default App
