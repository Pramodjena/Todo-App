import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now() + content,
      title: content,
    };
    if (!content) {
      return toast({
        position:"top",
        title: "No conent is added.",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
    } else {
      addTodo(newTodo);
      toast({
        position:"top",
        title: "Conent is successfully added.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setContent("");
    }
   
  };
  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack justifyContent="space-between" mt="8" p="2">
        <Input
          placeholder="Add Your Todos"
          variant="filled"
          borderColor="pink"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" colorScheme="pink">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};
