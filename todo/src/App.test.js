import { render } from '@testing-library/react';
import App from './App';

it('renders', () => {
  render(<App />);
});

it('should match snapshot', () => {
  const {asFragment}=render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

