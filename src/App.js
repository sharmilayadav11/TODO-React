import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { TodoItem } from './MyComponent/TodoItem';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';

function App() {
  return (
    <>
      <Header />
      <Todos />
      <TodoItem />
      <Footer />
    </>
  );
}

export default App;
