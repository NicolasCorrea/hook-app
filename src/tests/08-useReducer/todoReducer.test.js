import { todoReducer } from "../../components/08-useReducer/todoReducer"
import { demoTodos } from "../fixtures/demoTodos";

describe('test on todoReducer', () => {
  test('should return a state by default', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);

  });

  test('should add a todo', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Node',
      done: false
    };
    const state = todoReducer(demoTodos, {
      type: 'add',
      payload: newTodo
    })
    
    expect(state).toEqual([...demoTodos, newTodo])
  })
  
  test('should delete a todo', () => {
    const todoID = 1;
    const state = todoReducer(demoTodos, {
      type: 'delete',
      payload: todoID
    })
    
    expect(state).toEqual([ demoTodos[1] ])
    expect(state).toEqual(demoTodos.filter(v => v.id !== todoID))
  })
  
  test('should toggle a todo', () => {
    const todoID = 2;
    const state = todoReducer(demoTodos, {
      type: 'toggle',
      payload: todoID
    });
    expect(state[1]).not.toBe(demoTodos[1 ])
    expect(state.find(v => v.id === todoID).done).not.toBe(demoTodos.find(v => v.id === todoID).done)
  })
  

})
