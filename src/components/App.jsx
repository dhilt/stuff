import React from 'react';
import {connect} from 'react-redux';
import Tags from './Tags';

class App extends React.Component {
	getTagList(list) {
		return list || [];
	}
	render() {
		const { tags } = this.props;
		return <div className="app">
			{<Tags allTags={tags}/>}
			<div>___
			{this.getTagList(tags).map(entry =>
				<span>{entry.name}</span>
			)}___
			</div>
		</div>;
	}
}

connect(state => ({
	tags: state.tags
}));

export default App;