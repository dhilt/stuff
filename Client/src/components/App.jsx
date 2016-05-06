import React from 'react'
import {Link} from 'react-router'
import NotificationSystem from 'react-notification-system'
import Popup from '../utils/popup'

require('../styles/modules/app.scss');

class App extends React.Component {

	componentDidMount() {
		Popup.initialize(this, "notificationSystem");
	}

	render() {
		return (
			<div className="app">
				<NotificationSystem ref="notificationSystem" />
				<ul className="menu">
					<li><Link to="/">index</Link></li>
					<li><Link to="/items">items</Link></li>
					<li><Link to="/tags">tags</Link></li>
				</ul>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App;