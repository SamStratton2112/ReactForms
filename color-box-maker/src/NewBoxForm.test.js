import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('it renders', () => {
  render(<NewBoxForm />);
});


test('it matches snapshot', ()=>{
  const {asFragment} = render(<NewBoxForm/>);
  expect(asFragment()).toMatchSnapshot();
})

