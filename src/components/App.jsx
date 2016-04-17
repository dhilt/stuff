import React from 'react'
import {Link} from 'react-router'

require('../styles/modules/app.scss');

class App extends React.Component {

	render() {
		return (
			<div className="app">
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