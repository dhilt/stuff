import React from 'react';

class TagSearchInput extends React.Component {
	constructor() {
		super();
		this.state = {
			searchString: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
  	handleChange (event) {
  		this.setState({searchString: event.target.value});
  		this.props.onChange(event.target.value );
  	}
	render() {
		return <div className="tagSearchInput">
				<input
					value={this.state.searchString}
					onChange={this.handleChange}
				/>
		</div>;
	}
}


export default TagSearchInput;