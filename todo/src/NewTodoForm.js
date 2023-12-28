import { useState } from "react";
import { v4 as uuid} from 'uuid';

const NewTodoForm = ({addTodo})=>{
  const initialState = {
    todo: ''
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = (e)=>{
    // destructure values from event object 
    const {name,value} = e.target;
    setFormData(data=>({
      ...data,
      // update/add values 
      [name]: value
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    // update parent state and set id 
    addTodo({...formData, id:uuid()});
    // clear task input 
    setFormData(initialState);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">To Do</label>
      <input 
      id="todo" 
      type="text"
      name="todo"
      placeholder="What to "
      value={formData.todo}
      onChange={handleChange}
      />
      <button>Add To Do</button>
    </form>
  )
}
export default NewTodoForm;