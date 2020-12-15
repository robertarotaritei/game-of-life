import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RegistrationForm from './RegistrationForm';
import { shallow } from "enzyme";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Not Found' }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it('RegistrationForm clicks', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => { });
  const wrapper = shallow(<RegistrationForm />);
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.username').simulate('change', 'usernametoolong1234');
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.username').simulate('change', 'username');
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.password').simulate('change', 'password');
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.repeatPassword').simulate('change', 'password1');
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.repeatPassword').simulate('change', 'password');
  wrapper.find('SubmitButton').simulate('click');
});

test("RegistrationForm renders without crashing", () => {
  shallow(<RegistrationForm />);
});

test('Render RegistrationForm Text', () => {
  const { getByText } = render(<RegistrationForm />);
  const linkElement = getByText(/Already have an account/i);
  expect(linkElement).toBeInTheDocument();
});

it('RegistrationForm renders correctly', () => {
  const tree = renderer
    .create(<RegistrationForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});