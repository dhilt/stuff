export default function getCommonActions(actionTypes, api, stateToken) {
	return {

		new: () => {
			return (dispatch) => {
				dispatch({
					type: actionTypes.new
				})
			}
		},
		
		select: (tag) => {
			return (dispatch) => {
				dispatch({
					type: actionTypes.select,
					selected: tag
				})
			}
		},

		change: (tag) => {
			return (dispatch) => {
				dispatch({
					type: actionTypes.change,
					edited: tag
				})
			}
		},

		cancelChanges: () => {
			return (dispatch) => {
				dispatch({
					type: actionTypes.cancelChanges
				})
			}
		},

		applyChanges: () => {
			return (dispatch, getState) => {
				api.push(getState()[stateToken].edited, result =>
					dispatch({
						type: result.isNew ? actionTypes.receiveAdded : actionTypes.receiveChanged,
						result: result.tag
					})
				)
			}
		},

		delete: () => {
			return (dispatch, getState) => {
				api.delete(getState()[stateToken].edited.id, result =>
					dispatch({
						type: actionTypes.delete,
						id: result.id
					})
				)
			}
		}
	}
}