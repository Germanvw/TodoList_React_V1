import React from 'react';
import shortid from 'shortid';

const Form = ({ tasks, setTasks, input, setInput }) => {
  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const tasksHandler = (e) => {
    e.preventDefault();

    // Validation

    if (input.task.trim() === '' || input.category.trim() === '') {
      return;
    }
    // Submit Task

    setTasks([
      ...tasks,
      {
        task: input.task,
        category: input.category,
        id: shortid.generate(),
        completed: false,
      },
    ]);
    // Reset values
    setInput({
      task: '',
      category: '',
    });
  };

  return (
    <div className="form-task">
      <form onSubmit={tasksHandler}>
        <div className="input">
          <div className="input-task">
            <input
              name="task"
              onChange={inputHandler}
              tpye="text"
              placeholder="Task... Ex: Online Meeting."
              required
              value={input.task}
            />
          </div>
          <div className="input-task">
            <input
              name="category"
              onChange={inputHandler}
              tpye="text"
              placeholder="Category... Ex: Work."
              required
              value={input.category}
            />
          </div>
        </div>
        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
