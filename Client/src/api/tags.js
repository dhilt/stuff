import getCommonApi from './common'
import {myFetch} from './utils'

export default Object.assign({}, getCommonApi('tags'), {

	getAll: (cb) => myFetch('/api/tags', cb)

})