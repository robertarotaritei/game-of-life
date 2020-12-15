import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';
import { shallow } from "enzyme";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Ok' }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it('LoginForm clicks', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  const wrapper = shallow(<LoginForm />);
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.username').simulate('change', 'usernametoolong1234');
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.username').simulate('change', 'username');
  wrapper.find('SubmitButton').simulate('click');
  wrapper.find('.password').simulate('change', 'password');
  wrapper.find('SubmitButton').simulate('click');
});

test("LoginForm renders without crashing", () => {
  shallow(<LoginForm />);
});

test('Render LoginForm', () => {
  const { getAllByText } = render(<LoginForm />);
  const linkElement = getAllByText(/Log in/i);
  expect(linkElement[0]).toBeInTheDocument();
});

test('Render LoginForm Text', () => {
  const { getByText } = render(<LoginForm />);
  const linkElement = getByText(/Don't have an account/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render LoginForm Register Button', () => {
  const { getByText } = render(<LoginForm />);
  const linkElement = getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});

it('LoginForm renders correctly', () => {
  const tree = renderer
    .create(<LoginForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});