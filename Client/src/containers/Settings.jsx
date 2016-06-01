import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import i18n from '../utils/i18n'
import settingsActions from './../actions/settings'
import SettingsComponent from './../components/Settings'

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSettingChange: (settings) => {
			dispatch(settingsActions.change(settings));
		}
	}
};

const Settings = connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsComponent);

export default Settings