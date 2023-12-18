import './App.css';
import Header from './MyComponent/Header';
import { Todos } from './MyComponent/Todos';
import { AddTodo } from './MyComponent/AddTodo';
import { Footer } from './MyComponent/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todoTobeDeleted) => {
    console.log("I am ondelete of todo", "todo");

    setTodos(todos.filter((todoItem) => {
      return todoItem !== todoTobeDeleted;
    }));

  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Goto the Market",
      desc: "You need to go to the market and buy shoes1"

    },
    {
      sno: 2,
      title: "Goto the Mall",
      desc: "You need to go to the market and buy dresses2"
    },
    {
      sno: 3,
      title: "Goto the Gym",
      desc: "You need to go to the Gym and do some exercise3"
    }
  ]);

  const addTodo = (todo) => {
    //Create new list with old Todos and new Todo
    setTodos([
      {
        ...todo,// with 3 dots it will create copy of each property and elements
        sno: todos.length + 1
      },
      ...todos,
    ])
  };

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
