import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import appActions from '../actions/app'

import NotificationSystem from 'react-notification-system'
import Popup from '../utils/popup'
import AppComponent from '../components/App'

class AppWrapper extends React.Component {

	componentDidMount() {
		Popup.initialize(this, "notificationSystem");
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
};

const mapStateToProps = (state) => {
	return {
		languages: state.app.languages,
		lang: state.app.lang,
		i18n: (token) => {	
			let result = null;
			let context = state.app.lang.translations;
			token.split('.').forEach(t => result = result ? result[t] : context[t]);
			return result;
		} 
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