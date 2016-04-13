import React from 'react';

class Tags extends React.Component {
	getTagList() {
		return this.props.tagList || [];
	}
	render() {
		return <div className="tagSearchList">
			{this.getTagList().map(entry =>
				<button
					key={entry.id}
					onClick={() => this.props.onSelect(entry)}>
					{entry.name}
				</button>
			)}
		</div>;
	}
}

export default Tags;