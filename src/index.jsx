console.log('I am alive! ' + new Date());

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux'

import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'
import {getAllTags as getAllTagsAction} from './actions'

import App from './components/App';

const middleware = [thunk, logger()];
const store = createStore(
	reducer,
	applyMiddleware(...middleware)
);

store.dispatch(getAllTagsAction());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
