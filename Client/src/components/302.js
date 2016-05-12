import React, {PropTypes} from 'react'
import auth from '../utils/auth'

const AuthModalDialog = ({i18n}) => (
	<div className="modalDialog">
		<h2>{i18n('App.authDialog.title')}</h2>
		<form>
			<input />
			<button>...</button>
			<button>...</button>
		</form>
		<button onClick={auth.close}>{i18n('App.authDialog.close')}</button>
	</div>
);


export default AuthModalDialog