import { useDispatch, useSelector } from 'react-redux';
import { AppState, Todo, addTodo, toggleTodo } from '../modules/todos';
import Todos from '../components/Todos';
import { useCallback } from 'react';

const TodosContainer = () => {
  const todos = useSelector<AppState, Todo[]>((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (title: string) => {
    dispatch(addTodo(title));
  };

  const onToggle = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
