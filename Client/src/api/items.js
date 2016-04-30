import getCommonApi from './common'
import {myFetch} from './utils'

export default Object.assign({}, getCommonApi('items'), {

	search: (searchParams, cb) => myFetch('/api/items?searchString=' + searchParams.searchString, cb),

	getById: (id, success, fail) => myFetch('/api/items/' + id, success, fail)

})