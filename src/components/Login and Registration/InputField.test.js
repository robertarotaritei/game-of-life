import React from 'react';
import InputField from './InputField';
import { shallow } from "enzyme";

it('InputField clicks', () => {
    const onChangeMock = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };
    const wrapper = shallow(<InputField onChange={onChangeMock}/>);

    wrapper.find('input').simulate('change', event);
});