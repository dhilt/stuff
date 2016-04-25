import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import Tags from '../../src/components/Tags';
import {expect} from 'chai';

let tags = [{id:1, name: "Tag1"}, {id:2, name: "Tag2"}, {id:3, name: "Tag3"}, {id:4, name: "My1"}, {id:5, name: "My2"}];

describe('Tags', () => {

	it('renders some buttons', () => {
		const component = renderIntoDocument(
			<Tags allTags={tags}/>
		);

		const input = scryRenderedDOMComponentsWithTag(component, 'input');
		
		input[0].value = '1';
		Simulate.click(input[0]);	

		setTimeout(function() {
			const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
			expect(buttons.length).to.equal(2);
			expect(buttons[0].textContent).to.equal('Tag1');
			expect(buttons[1].textContent).to.equal('My1');
		}, 0);
	});

});