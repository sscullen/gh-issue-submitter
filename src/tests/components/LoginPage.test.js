import { shallow } from 'enzyme';

import React from 'react';

import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {

    const wrapper = shallow(<LoginPage startLogin={()=>{}} />);
    
    expect(wrapper.find('h1').length).toBe(1);

    expect(wrapper.find('h1').text()).toBe('Boilerplate');

    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    // SPIES!
    const startLoginSpy = jest.fn();
    //onSubmitSpy();
    //expect(onSubmitSpy).toHaveBeenCalled();

    // onSubmitSpy('shaun', 'butts');

    // expect(onSubmitSpy).toHaveBeenCalledWith('shaun', 'butts');
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>);

    wrapper.find('button').simulate('click', {
        preventDefault: () => {}
    });
  
    expect(startLoginSpy).toHaveBeenCalled();
});