// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './lib/bootstrap/css/bootstrap-flat.css';
import App from './containers/App'
import configureStore from './configureStore'

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
