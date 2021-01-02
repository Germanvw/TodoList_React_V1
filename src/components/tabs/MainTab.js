import React from 'react';
import Category from './Category';
import Task from './Task';

const MainTab = ({
  mainTab,
  tasks,
  setTasks,
  showCurrent,
  filtered,
  categoryList,
  setInputSelect,
  currentCatListHandler,
  currentCatList,
}) => {
  return (
    <div className="main-tab">
      {}
      {mainTab === 'tasks' ? (
        <Task
          tasks={tasks}
          setTasks={setTasks}
          showCurrent={showCurrent}
          filtered={filtered}
        />
      ) : (
        <Category
          tasks={tasks}
          categoryList={categoryList}
          setInputSelect={setInputSelect}
          currentCatListHandler={currentCatListHandler}
          currentCatList={currentCatList}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </div>
  );
};

export default MainTab;
