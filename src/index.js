import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './lib/bootstrap/css/bootstrap-flat.css'


//Step 1-React
import App from './1-React/App'
ReactDOM.render(
	<App />, 
	document.getElementById('root'));
registerServiceWorker()

// Step TBD
// import { Provider } from 'react-redux'
// import App from './x-combined/containers/App'
// import configureStore from './x-combined/configureStore'

// const store = configureStore();
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>, 
// 	document.getElementById('root'));
// registerServiceWorker()
