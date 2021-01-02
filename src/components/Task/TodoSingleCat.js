import React from 'react';

const TodoSingleCat = ({ currentTask, tasks, setTasks }) => {
  const deleteHandler = (e) => {
    setTasks(tasks.filter((e) => e.id !== currentTask.id));
  };

  const completeHandler = (e) => {
    setTasks(
      tasks.map((e) => {
        if (e.id === currentTask.id) {
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
        <li className="category">{currentTask.category} </li>
        <li className={`text ${currentTask.completed ? 'completed' : ''}`}>
          {currentTask.task}{' '}
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

export default TodoSingleCat;
