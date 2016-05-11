import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import appActions from '../actions/app'
import NotificationSystem from 'react-notification-system'
import popup from '../utils/popup'
import i18n from '../utils/i18n'
import AppComponent from '../components/App'

class AppWrapper extends React.Component {
	
	componentDidMount() {
		popup.initialize(this, 'notificationSystem', () => this.props.i18n);
	}

	render() {
		return (
			<div className="app">
				<NotificationSystem ref="notificationSystem"/>

				<AppComponent {...this.props}/>

				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token),
		languages: state.app.languages,
		lang: state.app.lang
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectLang: (lang) => {
			dispatch(appActions.selectLanguage(lang));
		}
	}
};

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppWrapper);

export default App