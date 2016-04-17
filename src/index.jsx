import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import tagsActions from './actions/tags'

import App from './components/App'
import Index from './components/Index'
import Tags from './containers/Tags'
import Tag from './containers/Tag'
import Items from './containers/Items'

const store = createStore(
	reducer,
	applyMiddleware(...[
		thunk,
		logger()
	])
);
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(tagsActions.getAll());

require('./styles/index.scss');

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Index}/>
				<Route path="items" component={Items}/>
				<Route path="tags" component={Tags}/>
				<Route path="tags/new" component={Tag}/>
				<Route path="tags/:id" component={Tag}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
