
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Landing from './Landing/Landing';
import TodoList from './Todo/TodoList';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
