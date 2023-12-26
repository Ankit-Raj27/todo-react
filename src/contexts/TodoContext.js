import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
  editTodo: (id, todo) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
