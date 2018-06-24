// react-test-renderer

import { shallow } from 'enzyme';

import React from 'react';

import { Header } from '../../components/Header';

import toJSON from 'enzyme-to-json';

test('should render Header correctly', () => {
    
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper.find('h1').length).toBe(1);

    expect(wrapper.find('h1').text()).toBe('Boilerplate');

    expect(wrapper).toMatchSnapshot();
});

// should call startLogout on button click

test('should call startLogout on button click', () => {
      // SPIES!
      const startLogoutSpy = jest.fn();
      //onSubmitSpy();
      //expect(onSubmitSpy).toHaveBeenCalled();
  
      // onSubmitSpy('shaun', 'butts');
  
      // expect(onSubmitSpy).toHaveBeenCalledWith('shaun', 'butts');
      const wrapper = shallow(<Header startLogout={startLogoutSpy}/>);
  
      wrapper.find('button').simulate('click', {
          preventDefault: () => {}
      });
    
      expect(startLogoutSpy).toHaveBeenCalled();
});

// LoginPage test file, should call startLogin on button click

// use spies, 