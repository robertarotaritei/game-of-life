import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HistoryList from './HistoryList';
import { shallow } from "enzyme";

const games = [
  {
    id: 1,
    initialState: '[[true, true],[false, false]]'
  }
];

test("HistoryList renders without crashing", () => {
  shallow(<HistoryList games={games} />);
});

it('HistoryList renders correctly', () => {
  const tree = renderer
    .create(<HistoryList games={games} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});