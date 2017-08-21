import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './lib/bootstrap/css/bootstrap-flat.css';

//Edit in the specific step here.
import App from './x-combined/containers/App'
import configureStore from './configureStore'

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
