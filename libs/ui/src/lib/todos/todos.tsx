import { Todo } from '@nx-workspace-prj1/data';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li key={t.title} className={'todo'}>
          {t.title}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
