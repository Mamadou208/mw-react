import React from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import { Col, Grid, Row, Button, ButtonGroup } from 'react-bootstrap'

import HeadlinesContainer from '../containers/HeadlinesContainer'

const App = () => {
	return (
		<Router>
			 <div >
				<Grid fluid>
					<Row className="show-grid">
						<Col sm={3}>
							<ButtonGroup vertical block>
								<Link to="/" className="btn btn-primary">Algemeen</Link>
								<Link to="/nosnieuwstech" className="btn btn-primary">Tech</Link>
								<Link to="/nosnieuwseconomie" className="btn btn-primary">Economie</Link>
							</ButtonGroup>
						</Col>
						<Col sm={6}>
							<h1>Title</h1>
							<Route exact path="/" component={HeadlinesContainer}/>
							<Route path="/nosnieuwstech" component={HeadlinesContainer}/>
							<Route path="/nosnieuwseconomie" component={HeadlinesContainer}/>
						</Col>
					</Row>
				</Grid>
			</div>
		</Router>
	)
}
							// {tabsInstance}
// const tabsInstance = (
// 	<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={this.handleSelect}>
// 		<Tab eventKey={1} title="Tab 1"><Redirect to="/" /></Tab>
// 		<Tab eventKey={2} title="Tab 2"><Redirect to="/nosnieuwstech" /></Tab>
// 		<Tab eventKey={3} title="Tab 3"><Redirect to="/nosnieuwseconomie" /></Tab>
// 	</Tabs>
// )

export default App
