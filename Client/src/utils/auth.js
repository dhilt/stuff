import apiAuth from '../api/auth'

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

auth.send = function (login, pass) {
	apiAuth.login(login, pass, result => {
			if (result && result.token) {
				var date = new Date(new Date().getTime() + 60 * 1000);
				document.cookie = "auth=" + result.token + "; path=/; expires=" + date.toUTCString();
				auth.close();
			}
		}
	);
};

export default auth