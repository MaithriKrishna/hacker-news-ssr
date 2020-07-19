import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Header } from './header';

configure({ adapter: new Adapter() });


describe('Header component of hacker news', () => {
    it('renders header component', () => {
        shallow(<Header />);
    });
});