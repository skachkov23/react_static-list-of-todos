import React from 'react';

import ToDo from '../types/ToDo';

import UserInfo from './UserInfo';
import TodoInfo from './TodoInfo';

type Props = {
  list: ToDo[],
};

const TodoList: React.FC<Props> = ({ list }) => (
  <ul className="list">
    {list.map(listItem => (
      <li className="list__item" key={listItem.id}>
        {listItem.user && <UserInfo user={listItem.user} />}
        <TodoInfo todo={listItem} />
      </li>
    ))}
  </ul>
);

export default TodoList;