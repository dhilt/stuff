import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import i18n from '../utils/i18n'
import settingsActions from './../actions/settings'
import SettingsComponent from './../components/Settings'

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token),
		defaultSettings: state.settings.default,
		releasedSettings: state.settings.released,
		editedSettings: state.settings.edited,
		apply: state.settings.apply
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		doChange: (token, value, options) => {
			dispatch(settingsActions.change(token, value, options));
		},
		doCancel: () => {
			dispatch(settingsActions.cancel());
		},
		doApply: () => {
			dispatch(settingsActions.apply());
		}
	}
};

const Settings = connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsComponent);

export default Settings