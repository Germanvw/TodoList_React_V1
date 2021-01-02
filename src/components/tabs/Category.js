import React from 'react';
import TodoListCat from '../Task/TodoListCat';

const Category = ({
  categoryList,
  tasks,
  setInputSelect,
  currentCatListHandler,
  currentCatList,
  setTasks,
}) => {
  const catHandler = (e) => {
    setInputSelect(e.target.value.toLowerCase());
    currentCatListHandler();
  };
  return (
    <div className="select">
      <select
        name="category-select"
        className="filter-category"
        onChange={catHandler}
      >
        <option value="choose" disabled selected>
          Choose
        </option>
        {categoryList.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <TodoListCat
        currentCatList={currentCatList}
        setTasks={setTasks}
        tasks={tasks}
      />
    </div>
  );
};

export default Category;
