import apiAuth from '../api/auth'
import popup from './popup'

let auth = {};

auth.initialize = function (context, ref) {
	auth.context = context;
	auth.ref = context.refs[ref];
};

auth.show = function () {
	auth.modalIsOpen = true;
	auth.context.forceUpdate();
};

auth.close = function () {
	auth.modalIsOpen = false;
	auth.context.forceUpdate();
};

auth.getToken = function () {
	let name = 'auth';
	let value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length == 2)
		return parts.pop().split(";").shift();
};

auth.login = function (login, pass, fail) {
	apiAuth.login(login, pass).then(result => {
			if (result && result.token) {
				var date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
				document.cookie = "auth=" + result.token + "; path=/; expires=" + date.toUTCString();
				auth.close();
				popup.show({
					messageToken: 'App.authDialog.actions.login',
					level: 'success'
				});
				return;
			}
			fail();
		}, fail
	);
};

let logoutCallback = () => {
	document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	auth.show();
};

auth.logout = function () {
	apiAuth.logout().then(logoutCallback, logoutCallback);
};

export default auth