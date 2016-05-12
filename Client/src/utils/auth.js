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

auth.send = function (login, pass) {
	console.log(login + '/' + pass);
	apiAuth.login(login, pass, result => {
			if (result) {
				auth.close();
			}
		}
	);
};

export default auth