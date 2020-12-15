import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Game from './Game';
import { shallow } from "enzyme";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Ok' }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it('Game clicks', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  const {getByTestId} = render(<Game />);
  let button = getByTestId('1-1');
  fireEvent.click(button);
  button = getByTestId('play');
  fireEvent.click(button);
  button = getByTestId('pause');
  fireEvent.click(button);
  button = getByTestId('resume');
  fireEvent.click(button);
  button = getByTestId('back');
  fireEvent.click(button);
  button = getByTestId('reset');
  fireEvent.click(button);
  button = getByTestId('speed');
  fireEvent.click(button);
  button = getByTestId('slow');
  fireEvent.click(button);
  button = getByTestId('fast');
  fireEvent.click(button);
  button = getByTestId('seed');
  fireEvent.click(button);
  button = getByTestId('save');
  fireEvent.click(button);
});

test("Game renders without crashing", () => {
  shallow(<Game />);
});

it('Game renders correctly', () => {
  const tree = renderer
    .create(<Game />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});