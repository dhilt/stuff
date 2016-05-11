import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { default as app } from './app'
import { default as index } from './index'
import { default as items } from './items'
import { default as tags } from './tags'

export default combineReducers({

	hasHistory(state = false, action) {
		if(action.type === '@@router/LOCATION_CHANGE') {
			return state ? true : ( action.payload.pathname !== '/' ? true : false ); 
		}
		return state;
	}, 

	routing,
	app,
	index,
	items,
	tags
})
