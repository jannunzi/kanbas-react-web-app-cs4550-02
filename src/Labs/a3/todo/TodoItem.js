const TodoItem = ({ todo }) => {
  return (
    <li className="list-group-item">
      <input type="checkbox" defaultChecked={todo.done} />
      &nbsp;
      {todo.title}({todo.status})
    </li>
  );
};
export default TodoItem;
