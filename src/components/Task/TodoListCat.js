import React from 'react';
import TodoSingleCat from './TodoSingleCat';

const TodoListCat = ({ currentCatList, tasks, setTasks }) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {currentCatList.length === 0 ? (
          <h3>No tasks for this category found</h3>
        ) : (
            currentCatList.map((e) => (
            <TodoSingleCat
              key={e.id}
                    currentTask={e}
                    tasks={tasks}
                    setTasks={setTasks}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoListCat;
