import getCommonApi from './common'
import {myFetch} from '../utils/fetch'

export default Object.assign({}, getCommonApi('tags'), {

	getAll: () => myFetch('/api/tags')

})