import React from 'react';
import TodoSingle from './TodoSingle';

const TodoList = ({ tasks, setTasks, filtered, showCurrent }) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {filtered.length === 0 ? (
          <h3>
            No {showCurrent === 'active' ? 'active ' : 'completed '}
            tasks submited
          </h3>
        ) : (
          filtered.map((e) => (
            <TodoSingle
              key={e.id}
              task={e}
              tasks={tasks}
              setTasks={setTasks}
              filtered={filtered}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
