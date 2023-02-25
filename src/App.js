import "./App.css";
import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  // const intiialState = [
  //   {
  //     id: 1,
  //     title: "Shopping",
  //   },
  //   {
  //     id: 2,
  //     title: "Playing",
  //   },
  // ];
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const deleteTodos = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  const addTodo = (content) => {
    return setTodos([...todos, content]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        alignSelf="flex-end"
        size="lg"
        isRound="true"
        onClick={toggleColorMode}
      />
      <Heading
        mb={8}
        fontWeight="extrabold"
        bgGradient="linear(to-r, cyan.700, pink.400, blue.300 )"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodos={deleteTodos} addTodo={addTodo} setTodos={setTodos}/>
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
