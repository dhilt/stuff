import React, {PropTypes} from 'react'

require('../styles/modules/settings.scss');

const Settings = ({i18n, doChange, doCancel, doDefault, doApply, defaultSettings, releasedSettings, editedSettings}) => (
	<div className="settings">
		<h3>{i18n('Settings.title')}</h3>
		<div className="settingsList">

			<ul>
				<li>
	<div className="description">{i18n('Settings.tagsSearchType')}</div>
	<div className="field">
		<select 
				value={editedSettings.index.tagsSearchType}
				onChange={(e) => doChange("index.tagsSearchType", e.target.value, {required: true, exact: ['union', 'intersect']})}>
			<option value="union">{i18n('Settings.tagsSearchTypeUnion')}</option>
			<option value="intersect">{i18n('Settings.tagsSearchTypeIntersect')}</option>
		</select>
	</div>
				</li>
				<li>
	<div className="description">{i18n('Settings.itemsPerPage')}</div>
	<div className="field">
		<input
				value={editedSettings.items.itemsPerPage}
				onChange={(e) => doChange("items.itemsPerPage", e.target.value, {required: true, number: true, min: 1})}/>
	</div>
				</li>
			</ul>

			<button onClick={doApply}>
				{i18n('Settings.controls.save')}
			</button>
			<button onClick={doDefault}>
				{i18n('Settings.controls.default')}
			</button>
			<button onClick={doCancel}>
				{i18n('Settings.controls.cancel')}
			</button>

		</div>
	</div>
);

Settings.propTypes = {
	i18n: PropTypes.func.isRequired,
	doChange: PropTypes.func.isRequired,
	doCancel: PropTypes.func.isRequired,
	doDefault: PropTypes.func.isRequired,
	doApply: PropTypes.func.isRequired
};

export default Settings