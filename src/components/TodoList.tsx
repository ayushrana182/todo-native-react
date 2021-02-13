import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { removeTodo, toggleTodo, updateTodo, useTodosContext } from "../store";

function TodoListItems( ) {
  const [todos, todosSet] = useTodosContext();
  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox 
          onClick={ () =>todosSet(toggleTodo(todos, todo.id))}
          />
          <Input mx={2} value={todo.text} 
          onChange={(evt) => todosSet(updateTodo(todos, todo.id, evt.target.value))}
          />
          <Button
          onClick= {()=> todosSet(removeTodo(todos, todo.id))}
          >Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
