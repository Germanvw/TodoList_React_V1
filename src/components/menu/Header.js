import React from 'react';

const Header = ({ showCurrent, setShowCurrent, displayHandler }) => {
  const currentHandler = (e) => {
    setShowCurrent(e.target.name);
    displayHandler();
  };
  return (
    <div className="header">
      <h1 className="title">Task Manager</h1>
      <h3 className="subtitle"> Organize your tasks easly</h3>
      <div className="buttons">
        <button
          onClick={currentHandler}
          className={`btn ${showCurrent === 'active' ? 'active' : 'noactive'}`}
          type="submit"
          name="active"
        >
          Active
        </button>
        <button
          onClick={currentHandler}
          className={`btn ${
            showCurrent === 'completed' ? 'active' : 'noactive'
          }`}
          type="submit"
          name="completed"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Header;
