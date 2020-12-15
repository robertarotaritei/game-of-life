import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

test("NavigationBar renders without crashing", () => {
  shallow(<NavigationBar />);
});

it('NavigationBar renders correctly', () => {
  const tree = renderer
    .create(<NavigationBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render NavigationBar Log in Button', () => {
  const { getByText } = render(<NavigationBar />);
  const linkElement = getByText(/Log in/i);
  expect(linkElement).toBeInTheDocument();
});
