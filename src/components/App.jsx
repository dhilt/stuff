import React from 'react';
import {Link} from 'react-router'

class App extends React.Component {

	render() {
		return (
			<div>
				<div>
					<ul>
						<li><Link to="/">index</Link></li>
						<li><Link to="/items">items</Link></li>
						<li><Link to="/tags">tags</Link></li>
					</ul>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App;