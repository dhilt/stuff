import React, {PropTypes} from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import Tags from './Tags'

const TagsWrapper = React.createClass({

    handleClickOutside() {
        this.props.onOutsideTagsClick();
    },

    render() {
        return (
            <Tags {...this.props}/>
        );
    }
});

export default enhanceWithClickOutside(TagsWrapper)