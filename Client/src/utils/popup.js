export default {
	initialize(context, ref) {
		if(!context) {
			throw('utils/popup: application context is not defined');
		}
		if(!ref) {
			throw('utils/popup: popup container reference is not defined');
		}
		if(!context.refs[ref]) {
			throw('utils/popup: can\'t access popup container reference on the app context');
		}
		this.ref = context.refs[ref];
		this.addNotificationMethod = context.refs[ref].addNotification;
		if(!this.addNotificationMethod) {
			throw('utils/popup: can\'t obtain addNotification method');
		}
	},

	show(settings) { 
		return this.addNotificationMethod(settings);
	}
}