import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('it renders', () => {
  render(<BoxList />);
});


test('it matches snapshot', ()=>{
  const {asFragment} = render(<BoxList/>);
  expect(asFragment()).toMatchSnapshot();
})

test('it should add a box and remove a box', ()=>{
  const {queryByText} = render(<BoxList/>)
  const btn = queryByText('Add Box')
  expect(queryByText('x')).not.toBeInTheDocument();

  fireEvent.click(btn)
  expect(queryByText('x')).toBeInTheDocument();
  // passes add box portion of test 

  const rmvBtn = queryByText('x');
  fireEvent.click(rmvBtn);
  expect(queryByText('x')).not.toBeInTheDocument();
  // passes remove box portion of test 
})