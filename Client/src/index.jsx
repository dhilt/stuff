import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/reducers'
import appActions from './actions/app'
import settingsActions from './actions/settings'
import tagsActions from './actions/tags'

import App from './containers/App'
import Settings from './containers/Settings'
import Index from './containers/Index'
import Items from './containers/Items'
import Item from './containers/Item'
import Tags from './containers/Tags'
import Tag from './containers/Tag'

const store = createStore(
	reducer,
	applyMiddleware(...[
		thunk,
		logger()
	])
);
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(appActions.loadAllLanguages());
store.dispatch(tagsActions.getAll());
store.dispatch(settingsActions.setDefault());

require('./styles/index.scss');

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Index}/>
				<Route path="items" component={Items}/>
				<Route path="items/:id" component={Item}/>
				<Route path="tags" component={Tags}/>
				<Route path="tags/:id" component={Tag}/>
				<Route path="settings" component={Settings}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
