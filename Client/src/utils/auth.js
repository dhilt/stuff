import apiAuth from '../api/auth'
import popup from './popup'

function loginSuccessCallback (success) {
	popup.show({
		messageToken: 'App.authDialog.actions.loginSuccess',
		level: 'success'
	});
	success();
}

function loginFailCallback (e, fail) {
	popup.show({
		messageToken: 'App.authDialog.actions.login' +
		((e === Object(e) && e.status === 400) ? 'Fail' : 'Error'),
		level: 'warning'
	});
	fail();
}

function logoutCallback () {
	document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	auth.show();
}

let auth = {};

auth.pending = [];

auth.initialize = function (context, ref) {
	auth.context = context;
	auth.ref = context.refs[ref];
};

auth.pushPending = function (item) {
	auth.pending.push(item);
};

auth.show = function (authPendingCallback) {
	if (authPendingCallback) {
		auth.pending.push(authPendingCallback);
	}
	if (auth.modalIsOpen) {
		return;
	}
	auth.modalIsOpen = true;
	auth.context.forceUpdate();
};

auth.close = function () {
	auth.pending = [];
	auth.modalIsOpen = false;
	auth.context.forceUpdate();
};

auth.getToken = function () {
	let name = 'auth';
	let value = '; ' + document.cookie;
	let parts = value.split('; ' + name + '=');
	if (parts.length == 2)
		return parts.pop().split(';').shift();
	return '';
};

auth.login = function (login, pass, success, fail) {
	apiAuth.login(login, pass).then(result => {
			if (result && result.token) {
				var date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
				document.cookie = 'auth=' + result.token + '; path=/; expires=' + date.toUTCString();
				loginSuccessCallback(success);
				auth.pending.forEach(p => p());
				auth.close();
				return;
			}
			loginFailCallback(null, fail);
		}, (e) => loginFailCallback(e, fail)
	);
};

auth.logout = function () {
	apiAuth.logout().then(logoutCallback, logoutCallback);
};

export default auth