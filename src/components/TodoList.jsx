import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main todoList">
      {todos.map((todo, todoIndex) => {
        return <TodoCard {...props} key={todoIndex} index={todoIndex}>{todo}</TodoCard>;
      })}
    </ul>
  );
}
