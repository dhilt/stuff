import React, {PropTypes} from 'react'
import Modal from 'react-modal'

require('../styles/modules/authModalDialog.scss');

class AuthModalDialog extends React.Component {

	constructor() {
		super();
		this.state = {
			login: '',
			pass: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSendClick = this.handleSendClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSendClick(e) {
		this.props.doLogin(this.state.login, this.state.pass, () => this.setState({pass: ''}));
	}

	render() {
		return (
			<Modal ref={this.props.reference}
				   overlayClassName="modalDialogOverlay"
				   className="authModalDialog"
				   isOpen={this.props.isOpen}
				   onRequestClose={this.props.onClose}
				   shouldCloseOnOverlayClick={false}>

				<div className="content">
					<h2>{this.props.i18n('App.authDialog.title')}</h2>

					<input name="login" type="text"
						   placeholder={this.props.i18n('App.authDialog.loginPlaceholder')}
						   value={this.state.login} onChange={this.handleChange}/>

					<br/><br/>

					<input name="pass" type="password"
						   placeholder={this.props.i18n('App.authDialog.passwordPlaceholder')}
						   value={this.state.pass} onChange={this.handleChange}/>

					<br/><br/>

					<button onClick={this.handleSendClick}>
						{this.props.i18n('App.authDialog.send')}
					</button>
				</div>

			</Modal>
		)
	}
}

export default AuthModalDialog