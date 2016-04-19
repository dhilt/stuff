export default function getCommonActions(actionTypes, api, tokens) {
	return {

		new: () => {
			return (dispatch) => {
				dispatch({
					type: actionTypes.new
				})
			}
		},

		select: (selected) => {
			return (dispatch) => {
				dispatch({
					type: actionTypes.select,
					selected: selected
				})
			}
		},

		change: (edited) => {
			return (dispatch) => {
				dispatch({
					type: actionTypes.change,
					edited: edited
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
				let edited = getState()[tokens.state].edited;
				if (tokens.entity === 'item') {
					edited.tags = edited.tags.map(t => t.id);
				}
				api.push(edited, result =>
					dispatch({
						type: result.isNew ? actionTypes.receiveAdded : actionTypes.receiveChanged,
						result: result[tokens.entity]
					})
				)
			}
		},

		delete: () => {
			return (dispatch, getState) => {
				api.delete(getState()[tokens.state].edited.id, result =>
					dispatch({
						type: actionTypes.delete,
						id: result.id
					})
				)
			}
		}
	}
}