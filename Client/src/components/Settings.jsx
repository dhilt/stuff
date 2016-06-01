import React, {PropTypes} from 'react'

require('../styles/modules/settings.scss');

const Settings = ({i18n, onSettingChange}) => (
	<div className="settings">
		<h3>{i18n('Settings.title')}</h3>
		<div className="settingsList">
			settings...
		</div>
	</div>
);

Settings.propTypes = {
	i18n: PropTypes.func.isRequired,
	onSettingChange: PropTypes.func.isRequired
};

export default Settings