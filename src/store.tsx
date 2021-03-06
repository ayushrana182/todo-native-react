import * as React from "react";


// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];


//Native React Implelementation Section

// Use State
 export const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial)
 export type UseTodosType = ReturnType<typeof useTodos>
 export type TodosType = UseTodosType[0]
 export type SetTodosType = UseTodosType[1]

// Use Context

const TodoContext = React.createContext<UseTodosType | null>(null);

export const useTodosContext = () => React.useContext(TodoContext)!;

export const TodosProvider = ({children}: {children:React.ReactNode}) =>(
  <TodoContext.Provider value={useTodos([])}> {children} </TodoContext.Provider>
);
