import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const Menu = ({i18n, logout}) => (
	<ul className="menu">
		<li><Link to="/">{i18n("App.mainMenu.index")}</Link></li>
		<li><Link to="/items">{i18n("App.mainMenu.items")}</Link></li>
		<li><Link to="/tags">{i18n("App.mainMenu.tags")}</Link></li>
		<li className="logout" onClick={logout}>{i18n("App.mainMenu.logout")}</li>
	</ul>
);

Menu.propTypes = {
	i18n: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

export default Menu