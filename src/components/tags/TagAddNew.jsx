import React from 'react';

class TagAddNew extends React.Component {
	render() {
		return <div className="tagAddNew">
				<button onClick={this.props.onClick} disabled={!!this.props.disabled}> + </button>
		</div>;
	}
}

export default TagAddNew;