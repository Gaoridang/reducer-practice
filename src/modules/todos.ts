import { Action } from 'redux';

export type AppState = {
  todos: Todo[];
};

// Action type
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

type AddTodoAction = Action<typeof ADD_TODO> & {
  type: string;
  payload: Todo;
};

type ToggleTodoAction = Action<typeof TOGGLE_TODO> & {
  type: string;
  payload: number;
};

type Actions = AddTodoAction | ToggleTodoAction;

// todo type
export interface Todo {
  title: string;
  id: number;
  done: boolean;
}

// Action creator function
let nextId = 1;
export const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    title,
    done: false,
  },
});

export const toggleTodo = (payload: number) => ({
  type: TOGGLE_TODO,
  payload,
});

// initialState
const initialState: Todo[] = [];

// reducer
const todos = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};

export default todos;
