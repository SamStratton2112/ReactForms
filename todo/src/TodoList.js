import { useState } from "react";
import Todo from './Todo.js'
import NewTodoForm from './NewTodoForm.js';

const TodoList = () =>{
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo)=>{
    // spread all todos and add new one 
    setTodos(todos=>[...todos, newTodo])
  }
  const removeTodo = id=>{
    setTodos(todos=> todos.filter(t=>t.id!==id))
  }

  return(
    <div>
      <NewTodoForm addTodo={addTodo}/>
      <ul>
        {todos.map(todo=>{
          return(
            <li key={todo.id}>
              <Todo  id={todo.id} todo={todo.todo} removeTodo={removeTodo}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList;