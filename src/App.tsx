import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
// import {  useTodos } from "./store";              //Use State
import {TodosProvider} from "./store"

export function App() {
  // const [todos, todosSet] = useTodos([]);


  return (
    <ChakraProvider theme={theme}>
      <TodosProvider>
      <Box maxWidth="8xl" margin="auto" p={5}>
          {/* ---------UseState-----------       
        <TopBar  todosSet={todosSet} />
        <TodoList todos={todos} todosSet={todosSet}/>
        <TodoAdd todos={todos} todosSet={todosSet}/> */}
        
     
        <TopBar   />
        <TodoList />
        <TodoAdd />
      </Box>
        </TodosProvider>
    </ChakraProvider>
  );
}
