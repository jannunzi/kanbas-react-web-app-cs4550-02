import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <h1>Assignment 3</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <TodoList />
      <TodoItem todo={{ done: true, title: "TODO 123", status: "COMPLETE" }} />
      <TodoItem todo={{ done: true, title: "TODO 123", status: "COMPLETE" }} />
      <TodoItem todo={{ done: true, title: "TODO 123", status: "COMPLETE" }} />
      <ConditionalOutput />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
