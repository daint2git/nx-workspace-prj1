import { useEffect, useState } from 'react';
import { Todo } from '@nx-workspace-prj1/data';
import { Todos } from '@nx-workspace-prj1/ui';

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
      <Todos todos={todos} />
    </>
  );
}
