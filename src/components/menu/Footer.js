import React from 'react';

const Footer = ({ mainTab, tabHandler, formHandler, form }) => {
  return (
    <div className="footer">
      <button
        onClick={tabHandler}
        className={`icon-bottom ${mainTab === 'tasks' ? 'enabled' : ''}`}
        type="submit"
        name="tasks"
      >
        <i className="fas fa-thumbtack"></i>
        <span>Tasks</span>
      </button>
      <button
        onClick={formHandler}
        className={
          form ? 'icon-bottom add-task enabled' : 'icon-bottom add-task'
        }
        type="submit"
        name="form"
      >
        <i className="fas fa-plus"></i>
      </button>
      <button
        onClick={tabHandler}
        className={`icon-bottom ${mainTab === 'category' ? 'enabled' : ''}`}
        type="submit"
        name="category"
      >
        <i className="fas fa-calendar-minus"></i>
        <span>Category</span>
      </button>
    </div>
  );
};

export default Footer;
