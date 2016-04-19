import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'

require('../styles/modules/item.scss');

const Item = ({original, changed, doChange, cancelChanges, acceptChanges, remove}) => (
	<div className="item">
		<div className="intro">
			{ changed.id ? "Here you can change \"" + original.name + "\" item" : "Here you can create a new item" }
		</div>

		<TagProperty property="name" type="input"
								 original={original} changed={changed} doChange={doChange}/>
		<TagProperty property="description" type="textarea"
								 original={original} changed={changed} doChange={doChange}/>

		<Controls original={original} changed={changed}
							cancelChanges={cancelChanges} acceptChanges={acceptChanges} remove={remove}/>
	</div>
);

Item.propTypes = {
	original: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	changed: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	doChange: PropTypes.func.isRequired,
	cancelChanges: PropTypes.func.isRequired,
	acceptChanges: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired
};

export default Item