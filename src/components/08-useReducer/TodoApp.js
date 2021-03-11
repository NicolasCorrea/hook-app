import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"
import "./style.css"




const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  const handleAddTodo = (newToDo) => {
    dispatch({
      type: "add",
      payload: newToDo
    });
  }

  const handleDelete = todoId => {
    const action = {
      type: "delete",
      payload: todoId
    }
    dispatch(action);
  }

  const handleToggle = todoId => {
    dispatch({
      type: "toggle",
      payload: todoId,
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <h1>ToDo App (<small>{todos.length}</small>)</h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>

      </div>

    </div>
  )
}
