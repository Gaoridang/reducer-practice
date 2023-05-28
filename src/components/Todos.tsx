import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { Todo } from '../modules/todos';

interface Props {
  todos: Todo[];
  onCreate: (title: string) => void;
  onToggle: (id: number) => void;
}

const Todos = ({ todos, onToggle, onCreate }: Props) => {
  const [title, setTitle] = useState('');

  const TodoList = useMemo(
    () =>
      todos.map((todo) => (
        <li
          style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          key={todo.id}
          onClick={() => onToggle(todo.id)}
        >
          {todo.title}
        </li>
      )),
    [todos, onToggle]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} placeholder="할 일을 입력하세요." onChange={onChange} />
        <button type="submit">추가하기</button>
      </form>
      <hr />
      <p>{todos && TodoList}</p>
    </div>
  );
};

export default Todos;
