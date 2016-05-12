import React, {PropTypes} from 'react'
import auth from '../utils/auth'

class AuthModalDialog extends React.Component {

	constructor() {
		super();
		this.state = {
			login: '',
			pass: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSendClick = this.handleSendClick.bind(this);
		this.handleCloseClick = this.handleCloseClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSendClick(e) {
		auth.send(this.state.login, this.state.pass);
		this.setState({
			pass: ''
		});
	}

	handleCloseClick(e) {
		auth.close();
		this.setState({
			login: '',
			pass: ''
		});
	}

	render() {
		return (
			<div className="modalDialog">
				<h2>{this.props.i18n('App.authDialog.title')}</h2>

				<input name="login" type="text"
					   placeholder={this.props.i18n('App.authDialog.loginPlaceholder')}
					   value={this.state.login} onChange={this.handleChange}/>
				
				<br/>
				
				<input name="pass" type="password"
					   placeholder={this.props.i18n('App.authDialog.passwordPlaceholder')}
					   value={this.state.pass} onChange={this.handleChange}/>

				<br/><br/>

				<button onClick={this.handleSendClick}>
					{this.props.i18n('App.authDialog.send')}
				</button>

				<button onClick={this.handleCloseClick}>
					{this.props.i18n('App.authDialog.close')}
				</button>
			</div>
		)
	}
}

export default AuthModalDialog