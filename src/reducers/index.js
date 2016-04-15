import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { default as tags } from './tags'

export default combineReducers({
	tags,
	routing
})
