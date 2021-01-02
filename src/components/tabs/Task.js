import React from 'react';
import TodoList from '../Task/TodoList';

const Task = ({tasks, setTasks, showCurrent, filtered}) => {
  return (
    <div>
      <TodoList tasks={tasks} setTasks={setTasks} filtered={filtered} showCurrent={showCurrent} />
    </div>
  );
};

export default Task;
