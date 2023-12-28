import { render } from '@testing-library/react';
import App from './App';

test('it renders', () => {
  render(<App />);
});

test('it matches snapshot', ()=>{
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
})