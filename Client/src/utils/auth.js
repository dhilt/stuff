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

export default auth