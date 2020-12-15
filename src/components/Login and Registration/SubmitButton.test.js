import React from 'react';
import SubmitButton from './SubmitButton';
import { shallow } from "enzyme";

it('SubmitButton clicks', () => {
  const onClickMock = jest.fn();
  const event = {
    preventDefault() { },
    target: { value: 'the-value' }
  };
  const wrapper = shallow(<SubmitButton onClick={onClickMock} />);
  wrapper.find('button').simulate('click');
});