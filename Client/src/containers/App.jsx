import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import appActions from '../actions/app'
import NotificationSystem from 'react-notification-system'
import Modal from 'react-modal'
import popup from '../utils/popup'
import auth from '../utils/auth'
import i18n from '../utils/i18n'
import AuthModalDialog from '../components/302'
import AppComponent from '../components/App'

class AppWrapper extends React.Component {

	componentDidMount() {
		popup.initialize(this, 'notificationSystem', () => this.props.i18n);
		auth.initialize(this, 'authorizationDialog');
	}

	render() {

		return (
			<div className="app">
				<NotificationSystem ref="notificationSystem"/>

				<Modal ref="authorizationDialog"
					   isOpen={auth.modalIsOpen}
					   onRequestClose={auth.close}
					   shouldCloseOnOverlayClick={false}>
					<AuthModalDialog i18n={this.props.i18n}/>
				</Modal>

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