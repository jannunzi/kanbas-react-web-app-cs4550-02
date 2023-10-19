import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo, setTodo } from "./todosReducer";
function TodoList() {
  const { todos } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  //   const [todos, setTodos] = useState([
  //     { id: "1", title: "Learn React" },
  //     { id: "2", title: "Learn Node" },
  //   ]);
  //   const [todo, setTodo] = useState({ title: "Learn Mongo" });
  //   const addTodo = (todo) => {
  //     const newTodos = [
  //       ...todos,
  //       { ...todo, id: new Date().getTime().toString() },
  //     ];
  //     setTodos(newTodos);
  //     setTodo({ title: "" });
  //   };
  //   const deleteTodo = (id) => {
  //     const newTodos = todos.filter((todo) => todo.id !== id);
  //     setTodos(newTodos);
  //   };
  //   const updateTodo = (newTodo) => {
  //     const newTodos = todos.map((oldTodo) =>
  //       oldTodo.id === newTodo.id ? newTodo : oldTodo
  //     );
  //     setTodos(newTodos);
  //     setTodo({ title: "" });
  //   };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} deleteTodo={deleteTodo} setTodo={setTodo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
