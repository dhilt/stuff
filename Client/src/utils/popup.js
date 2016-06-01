function checkPopupInitParams(context, ref, get_i18n) {
	if (!context) {
		throw('utils/popup: application context is not defined');
	}
	if (!ref) {
		throw('utils/popup: popup container reference is not defined');
	}
	if (!context.refs[ref]) {
		throw('utils/popup: can\'t access popup container reference on the app context');
	}
	if (typeof context.refs[ref].addNotification !== 'function') {
		throw('utils/popup: can\'t obtain addNotification method');
	}
	if (typeof get_i18n !== 'function') {
		throw('utils/popup: i18n getter is not defined');
	}
}

class Popup {
	initialize(context, ref, get_i18n) {
		checkPopupInitParams(context, ref, get_i18n);
		this.ref = context.refs[ref];
		this.addNotificationMethod = context.refs[ref].addNotification;
		this.i18n = get_i18n;
	}

	show(settings) {
		if (settings.messageToken) {
			let str = this.i18n()(settings.messageToken);

			// parametrization
			if(settings.messageTokenParams && settings.messageTokenParams.length) {
				let re = /\{\{\%(\d)\}\}/ig
				str.match(re).forEach( m => {
					let paramIndex = parseInt(m.replace(/[^\d]/g, ''), 10);
					if(!isNaN(paramIndex) && paramIndex - 1 < settings.messageTokenParams.length) {
						str = str.replace(m, settings.messageTokenParams[paramIndex - 1]);
					}
				});
			}

			settings.message = str;
		}
		return this.addNotificationMethod(settings);
	}
}

const popup = new Popup();

export default popup