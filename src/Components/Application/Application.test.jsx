import React from 'react';
import { Application } from './Application';
import { mount } from 'enzyme';

describe('Test for the Application component', () => {
	test('Application should render correctly', () => {
		const component = mount(<Application />);

		const componentText = component.text().toLowerCase();
		expect(componentText).toEqual('this is a react app');
	});
});
