import { useState } from "react";

function TodoList() {

     const [ todos, setTodos] = useState()

    return ( 
        
       <div>
          <h1>Todo List</h1>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => addTodo(todo.id)}>Add</button>
       </div>

     );
}

export default TodoList;