import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import GameMenu from './GameMenu';
import { shallow } from "enzyme";

test("GameMenu renders without crashing", () => {
  shallow(<GameMenu />);
});

it('GameMenu renders correctly', () => {
  const tree = renderer
    .create(<GameMenu />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});