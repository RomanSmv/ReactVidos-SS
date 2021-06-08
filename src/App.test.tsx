import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';
import React from "react";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SamuraiJSApp />, div);
    ReactDOM.unmountComponentAtNode(div);
})