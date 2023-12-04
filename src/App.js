import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { TodoItem } from './MyComponent/TodoItem';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';

function App() {
  let todos = [
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



  ]
  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Todos todos={todos} />

      <Footer />
    </>
  );
}

export default App;
