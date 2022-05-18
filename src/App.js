import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/todo' element={<RequireAuth> 
          <Todo> </Todo>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/register' element={<Register></Register>}> 4</Route>
      </Routes>
    </div>
  );
}

export default App;
