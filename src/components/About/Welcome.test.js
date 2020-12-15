import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Welcome from './Welcome';
import { shallow } from "enzyme";

test("Welcome renders without crashing", () => {
  shallow(<Welcome />);
});

test('Render Welcome', () => {
  const { getByText } = render(<Welcome />);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

it('Welcome renders correctly', () => {
  const tree = renderer
    .create(<Welcome />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});