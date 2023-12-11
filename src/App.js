import './App.css';
import Header from './MyComponent/Header';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';
import React, { useState } from 'react';

/*
Suppose you have a shopping list of fruits:

const shoppingList1 = ["Apple", "Orange", "Banana", "Grapes"];
In React, when you want to remove an item, let's say "Orange," from the list, instead of directly removing it from shoppingList1, you create a new shopping list and include all items except "Orange" from the original list:

const shoppingList2 = ["Apple", "Banana", "Grapes"];
This approach ensures that the original list remains unchanged.
*/

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
  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
