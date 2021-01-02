import React from 'react';

const TodoSingle = ({ task, setTasks, tasks }) => {
  const deleteHandler = (e) => {
    setTasks(tasks.filter((e) => e.id !== task.id));
  };

  const completeHandler = (e) => {
    setTasks(
      tasks.map((e) => {
        if (e.id === task.id) {
          return {
            ...e,
            completed: !e.completed,
          };
        }
        return e;
      })
    );
  };

  return (
    <div className="single-task">
      <div className="single-text">
        <li className="category">{task.category} </li>
        <li className={`text ${task.completed ? 'completed' : ''}`}>
          {task.task}{' '}
        </li>
      </div>
      <div className="single-btn">
        <button onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
export default TodoSingle;
