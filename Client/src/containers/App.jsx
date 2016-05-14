import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import appActions from '../actions/app'
import popup from '../utils/popup'
import auth from '../utils/auth'
import i18n from '../utils/i18n'
import NotificationSystem from 'react-notification-system'
import AuthModalDialog from '../components/AuthModalDialog'
import AppComponent from '../components/App'

let authModalDialogRef = 'authModalDialog';

class AppWrapper extends React.Component {

	componentDidMount() {
		popup.initialize(this, 'notificationSystem', () => this.props.i18n);
		auth.initialize(this, authModalDialogRef);
	}

	render() {

		return (
			<div className="app">
				<NotificationSystem ref="notificationSystem"/>

				<AuthModalDialog
					   reference={authModalDialogRef}
					   i18n={this.props.i18n}
					   isOpen={auth.modalIsOpen}
					   doLogin={auth.login}
					   onClose={auth.close}/>

				<AppComponent {...this.props} logout={auth.logout}/>

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