import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Button,
  useDisclosure,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const TodoList = ({ todos, setTodos, deleteTodos, addTodo }) => {
  const [text, setText] = useState("");
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null); // Add state to keep track of the current todo index
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = () => {
    if (currentTodoIndex !== null) {
      // Check if currentTodoIndex is not null
      const updatedTodo = { ...todos[currentTodoIndex], title: text };
      const updatedTodos = [...todos];
      updatedTodos[currentTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      onClose();
    }
  };

  const handleEdit = (index) => {
    setCurrentTodoIndex(index); // Set currentTodoIndex when editing a todo
    setText(todos[index].title); // Set the text to the current todo title
    onOpen();
  };

  return (
    <VStack
      divider={<StackDivider />}
      border="1px solid black"
      borderRadius="lg"
      p={4}
      width="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos?.length ? ( // Check if there are todos to display
        todos.map((item, index) => {
          return (
            <HStack key={item.id}>
              <Text>{item.title}</Text>
              <Spacer />
              <IconButton
                icon={<FaEdit />}
                isRound={true}
                onClick={() => handleEdit(index)} // Call handleEdit with the current index
              />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Todo</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Edit Todo</FormLabel>
                      <Input
                        placeholder="Edit Todo"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={() => handleSave()}
                    >
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <IconButton
                icon={<FaTrash />}
                isRound={true}
                onClick={() => deleteTodos(item.id)}
              />
            </HStack>
          );
        })
      ) : (
        <Badge borderRadius="lg" colorScheme="red" p="4" variant="subtle">
          There's no todos left in your bucket !!!
        </Badge>
      )}
    </VStack>
  );
};
