import {browserHistory} from 'react-router'
import Popup from '../utils/popup'

function changeRoute(globalState, localState) {
	if (globalState.hasHistory) {
		browserHistory.goBack();
	}
	else {
		browserHistory.push(globalState[localState].path);
	}
}

export default function getCommonActions(actionTypes, api, tokens) {
	return {

		new(newName) {
			return (dispatch) => {
				dispatch({
					type: actionTypes.new,
					new: {
						name: newName
					}
				})
			}
		},

		select(selected) {
			return (dispatch) => {
				dispatch({
					type: actionTypes.select,
					selected: selected
				})
			}
		},

		change(edited) {
			return (dispatch) => {
				dispatch({
					type: actionTypes.change,
					edited: edited
				})
			}
		},

		cancelChanges() {
			return (dispatch, getState) => {
				dispatch({
					type: actionTypes.cancelChanges
				});
				changeRoute(getState(), tokens.state);
			}
		},

		create(success) {
			return (dispatch, getState) => {
				let edited = getState()[tokens.state].edited;
				if (tokens.entity === 'item') {
					edited = Object.assign({}, edited, {tags: edited.tags.map(t => t.id)});
				}
				api.create(edited, result => {
					Popup.show({
						message: 'Record was successfully created.',
						level: 'success'
					});
					if (success) {
						success(dispatch, getState, result);
					}
					else {
						dispatch({
							type: actionTypes.receiveAdded,
							result: result
						});
						changeRoute(getState(), tokens.state);
					}
				});
			}
		},

		update() {
			return (dispatch, getState) => {
				let edited = getState()[tokens.state].edited;
				if (tokens.entity === 'item') {
					edited = Object.assign({}, edited, {tags: edited.tags.map(t => t.id)});
				}
				api.update(edited, result => {
					Popup.show({
						message: 'Record was successfully updated.',
						level: 'success'
					});
					result.tags = null;
					dispatch({
						type: actionTypes.receiveChanged,
						result: result
					});
					changeRoute(getState(), tokens.state);
				});
			}
		},

		delete() {
			return (dispatch, getState) =>
				api.delete(getState()[tokens.state].edited.id, result => {
					Popup.show({
						message: 'Record was successfully deleted.',
						level: 'success'
					});
					dispatch({
						type: actionTypes.delete,
						id: result.id
					});
					changeRoute(getState(), tokens.state);
				})
		}
	}
}