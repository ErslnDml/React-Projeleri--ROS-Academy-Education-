import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { TodoProvider } from './contexts/ToDoContext';

function App() {
  return (
    <TodoProvider>
    <div className="todoapp">
      <Header/>
      <Content/>
    </div>
    <Footer/>
    </TodoProvider>
  );
}

export default App;
