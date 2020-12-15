import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { shallow } from "enzyme";

test("Dashboard renders without crashing", () => {
  shallow(<Dashboard />);
});

test('Render Dashboard', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

it('Dashboard renders correctly', () => {
  const tree = renderer
    .create(<Dashboard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});