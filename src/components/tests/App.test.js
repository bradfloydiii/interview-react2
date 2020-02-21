import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../../App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('adds', () => {
        expect(2).toEqual(2);
    });

    it('has a div element', () => {
        const app = shallow(<App />);
        console.log(app.find('div').length);
        expect(app.find('div').length).toEqual(2);
    })
});