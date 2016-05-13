import {myDataFetch, generateApiData} from './utils'

export default {
	login: (login, password, success, fail) =>
		myDataFetch('/api/login', generateApiData('POST', {login: login, password: password}), success, fail)
}