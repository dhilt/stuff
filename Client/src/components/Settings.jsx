import React, {PropTypes} from 'react'

require('../styles/modules/settings.scss');

const Settings = ({i18n, doChange, doCancel, doApply, defaultSettings, releasedSettings, editedSettings, apply}) => (
	<div className="settings">
		<h3>{i18n('Settings.title')}</h3>
		<div className="settingsList">

			<input
					value={editedSettings.items.itemsPerPage}
					onChange={(e) => doChange("items.itemsPerPage", e.target.value, {number: true, min: 1})}/>
			Items per page.

			<button onClick={doCancel}>Cancel</button>
			<button onClick={doApply}>Save</button>

		</div>
	</div>
);

Settings.propTypes = {
	i18n: PropTypes.func.isRequired,
	doChange: PropTypes.func.isRequired,
	doCancel: PropTypes.func.isRequired,
	doApply: PropTypes.func.isRequired,
	apply: PropTypes.bool
};

export default Settings