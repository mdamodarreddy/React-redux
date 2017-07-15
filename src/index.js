import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import allReducers from './reducers/index'
import App from './App';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(allReducers);
console.log(store,'store');
ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));
registerServiceWorker();
