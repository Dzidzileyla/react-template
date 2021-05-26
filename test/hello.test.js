import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

// TODO: move configuration to separate file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('hello test', () => {
  const component = shallow(<App />);

  expect(component.text()).toEqual('Hello World!');
});
