import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { default as index } from './index'
import { default as items } from './items'
import { default as tags } from './tags'

export default combineReducers({
	routing,
	index,
	items,
	tags
})
