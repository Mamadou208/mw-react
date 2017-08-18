import React from 'react'
import {
	BrowserRouter,
	Route,
	Link
} from 'react-router-dom'

import { Col, Grid, Row, Button, ButtonGroup } from 'react-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

import HeadlinesContainer from '../containers/HeadlinesContainer'

const App = () => {
	return (
		<BrowserRouter>
			 <div >
				<Grid fluid>
					<Row className="show-grid">
						{navbarInstance}
						<Col sm={3}>
							<ButtonGroup vertical block>
								<RedButton loc='/' type="primary" title="Algemeen"/>
								<RedButton loc='/nosnieuwstech' type="primary" title="Tech"/>
								<RedButton loc='/nosnieuwseconomie' type="primary" title="Economie"/>
							</ButtonGroup>
						</Col>
						<Col sm={6}>
							<Route exact path="/" component={HeadlinesContainer}/>
							<Route path="/nosnieuwstech" component={HeadlinesContainer} />
							<Route path="/nosnieuwseconomie" component={HeadlinesContainer}/>
						</Col>
					</Row>
				</Grid>
			</div>
		</BrowserRouter>
	)
}

const RedButton = (args) => {
	return(
		<Route render={({ history }) => (
			<Button
			bsStyle={args.type}
			onClick={() => { history.push(args.loc) }}>
			{args.title}
			</Button>
		)} />
	)
}

const navbarInstance = (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a to="/">Muiswerk-React</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
    </Nav>
  </Navbar>
);



							// {tabsInstance}
// const tabsInstance = (
// 	<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={this.handleSelect}>
// 		<Tab eventKey={1} title="Tab 1"><Redirect to="/" /></Tab>
// 		<Tab eventKey={2} title="Tab 2"><Redirect to="/nosnieuwstech" /></Tab>
// 		<Tab eventKey={3} title="Tab 3"><Redirect to="/nosnieuwseconomie" /></Tab>
// 	</Tabs>
// )

export default App
