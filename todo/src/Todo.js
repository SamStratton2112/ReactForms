const Todo = ({id, todo, removeTodo, editTodo}) =>{
    const remove = ()=> removeTodo(id)
    const edit = ()=> editTodo(id)
    return(
        <div>
            <div>{todo}</div>
            <button onClick={remove}>X</button>
            <button onClick={edit}>Edit</button>
        </div>
    )
}

export default Todo;