
const initialState = [
  {
    id: 1,
    todo: "Buy Bread",
    done: false,
  }
];

const todoReducer = (state = initialState, action) => {
  
  switch (action?.type) {
    case "agregar":
      return [...state, action.payload];
      break;
  
    default:
      break;
  }
    
  
  return state
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Buy milk",
  done: false,
}

const action = {
  type: "agregar",
  payload: newTodo
}

todos = todoReducer(todos, action)



console.log(todos)