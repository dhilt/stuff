import React from 'react'
import {Link} from 'react-router'
import NotificationSystem from 'react-notification-system'
import Popup from '../utils/popup'

import i18n from '../utils/i18n'
require('../styles/modules/app.scss');

class App extends React.Component {

	componentDidMount() {
		Popup.initialize(this, "notificationSystem");
	}

	render() {
		return (
			<div className="app">

				<NotificationSystem ref="notificationSystem"/>

				<ul className="menu">
					<li><Link to="/">{i18n.text("App.mainMenu.index")}</Link></li>
					<li><Link to="/items">{i18n.text("App.mainMenu.items")}</Link></li>
					<li><Link to="/tags">{i18n.text("App.mainMenu.tags")}</Link></li>
				</ul>

				<ul className="languages">
					{i18n.getAllLanguages().map(lang =>
						<li key={lang.token}
							className={i18n.getLangToken() === lang.token ? "selected" : ""}
							onClick={() => {
								if(i18n.getLangToken() !== lang.token) {
									i18n.setLang(lang.token);
									this.forceUpdate();
								}
							}}>
								{lang.token}
						</li>
					)}
				</ul>

				<div className="content">
					{this.props.children}
				</div>

			</div>
		)
	}
}

export default App;