import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders', () => {
  render(<TodoList />);
});

it('should match snapshot', () => {
  const {asFragment}=render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('should add a todo and then remove a todo', ()=>{
    const {queryByText} = render(<TodoList/>)
    const btn = queryByText('Add To Do')
    expect(queryByText('X')).not.toBeInTheDocument();
  
    fireEvent.click(btn)
    expect(queryByText('X')).toBeInTheDocument();
    // passes add todo portion of test 
  
    const rmvBtn = queryByText('X');
    fireEvent.click(rmvBtn);
    expect(queryByText('X')).not.toBeInTheDocument();
    // passes remove todo portion of test 
  })