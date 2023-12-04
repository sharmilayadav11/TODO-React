import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { TodoItem } from './MyComponent/TodoItem';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';

function App() {
  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Todos />
      <TodoItem />
      <Footer />
    </>
  );
}

export default App;
