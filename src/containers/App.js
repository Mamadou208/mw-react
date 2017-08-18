import React from 'react'
import {
	BrowserRouter,
	Route
} from 'react-router-dom'

import { Col, Grid, Row, Button, ButtonGroup } from 'react-bootstrap'
import { Nav, Navbar, Well } from 'react-bootstrap'

import HeadlinesContainer from '../containers/HeadlinesContainer'

const App = () => {
	return (
		<BrowserRouter>
			 <div >
				<Grid fluid>
					<Row className="show-grid">
						{navbarInstance}
						<Col sm={2} smOffset={1}>
							<ButtonGroup vertical block>
								<RedButton loc='/' type="primary" title="Algemeen"/>
								<RedButton loc='/nosnieuwstech' type="primary" title="Tech"/>
								<RedButton loc='/nosnieuwseconomie' type="primary" title="Economie"/>
							</ButtonGroup>
						</Col>
						<Col sm={5}>
							<Route exact path="/" component={HeadlinesContainer}/>
							<Route path="/nosnieuwstech" component={HeadlinesContainer} />
							<Route path="/nosnieuwseconomie" component={HeadlinesContainer}/>
						</Col>
						<Col sm={3}>
							<h2>Preview</h2>
							<Well>Over here!</Well>

						</Col>
					</Row>
				</Grid>
			</div>
		</BrowserRouter>
	)
}

const RedButton = (args) => {
	return(
		<Route render={({ history, location }) => (
			<Button
			className={location.pathname === args.loc ? 'active' : ''}
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

export default App
