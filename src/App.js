import React, { useState, useEffect } from 'react';
import Header from './components/menu/Header';
import Footer from './components/menu/Footer';
import MainTab from './components/tabs/MainTab';
import Form from './components/tabs/Form';

function App() {
  const [mainTab, setMainTab] = useState('tasks');
  const [form, setForm] = useState(false);
  const [input, setInput] = useState({
    task: '',
    category: '',
  });
  const [tasks, setTasks] = useState([]);
  const [showCurrent, setShowCurrent] = useState('active');
  const [inputSelect, setInputSelect] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [currentCatList, setCurrentCatList] = useState([]);

  // useEffect

  useEffect(
    (e) => {
      displayHandler();
      currentCatListHandler();
    },
    [tasks, showCurrent, inputSelect]
  );

  useEffect(
    (e) => {
      categoryHandler();
    },
    [tasks]
  );

  const formHandler = (e) => {
    setForm(!form);
  };

  const displayHandler = (e) => {
    switch (showCurrent) {
      case 'completed':
        setFiltered(tasks.filter((e) => e.completed === true));
        break;
      case 'active':
        setFiltered(tasks.filter((e) => e.completed === false));
        break;
      default:
        break;
    }
  };
  // Removes duplicates from category array
  const removeDuplicate = (data) => {
    return [...new Set(data)];
  };
  // Category Handler
  const categoryHandler = (e) => {
    var array = [];
    tasks.map((e) => {
      array = [...array, e.category.toLowerCase()];
    });
    var newArray = [];
    newArray = removeDuplicate(array);
    setCategoryList(newArray);
  };

  const currentCatListHandler = (e) => {
    var array = [];
    tasks.map((e) => {
      console.log(`input select: ${inputSelect}`);
      console.log(`category: ${e.category}`);
      if (e.category.toLowerCase() === inputSelect) {
        array = [...array, e];
      }
    });
    setCurrentCatList(array);
  };

  const tabHandler = (e) => {
    setMainTab(e.target.name);
  };

  return (
    <div className="todo-body">
      <Header
        showCurrent={showCurrent}
        setShowCurrent={setShowCurrent}
        displayHandler={displayHandler}
      />
      <MainTab
        setInputSelect={setInputSelect}
        mainTab={mainTab}
        tasks={tasks}
        setTasks={setTasks}
        showCurrent={showCurrent}
        filtered={filtered}
        categoryList={categoryList}
        currentCatListHandler={currentCatListHandler}
        currentCatList={currentCatList}
      />
      {form ? (
        <Form
          tasks={tasks}
          setTasks={setTasks}
          input={input}
          setInput={setInput}
        />
      ) : null}
      <Footer
        tabHandler={tabHandler}
        mainTab={mainTab}
        formHandler={formHandler}
        form={form}
      />
    </div>
  );
}

export default App;
