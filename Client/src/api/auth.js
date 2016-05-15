import {myFetch} from '../utils/fetch'

export default {
	login: (login, password) =>
		myFetch('/api/login', 'POST', {login: login, password: password}),

	logout: () => myFetch('/api/logout')
}