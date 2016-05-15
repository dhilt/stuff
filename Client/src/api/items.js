import getCommonApi from './common'
import {myFetch} from '../utils/fetch'

export default Object.assign({}, getCommonApi('items'), {

	search: (searchParams) => myFetch('/api/items?searchString=' + searchParams.searchString),

	getById: (id) => myFetch('/api/items/' + id)

})