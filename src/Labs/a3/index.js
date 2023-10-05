import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
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
