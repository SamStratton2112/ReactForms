const Todo = ({id, todo, removeTodo}) =>{
    const remove = ()=> removeTodo(id)
    return(
        <div>
            <div>{todo}</div>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;