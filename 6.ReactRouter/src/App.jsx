import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import TaskDetails from './components/TaskDetails';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
    <nav>
      <ul>
        <li> <Link to="/"> Início </Link> </li>
        <li> <Link to="/about"> Sobre </Link></li>
        <li> <Link to="/contato"> Contato </Link></li>

        <li> <NavLink className={({ isActive } ) => (isActive ? "active-link" : "")} to="/contato"> Contato </NavLink></li>
        <li> <Link to="/login"> Login </Link></li>
        <li> <Link to="/dashboard"> Dashboard</Link></li>
      </ul>

      <div> 
        <h2> Tarefas </h2>
        <Link to="/tasks/1"> Tarefa 1 </Link>
        <Link to="/tasks/2"> Tarefa 2</Link>
        <Link to="/tasks/3"> Tarefa 3</Link>
      </div>

      <div>
          <h2> Itens </h2>
          <Link to="/items/1"> Item </Link> 
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Sobre />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/login' element={ <Login />}/>

      <Route path='/tasks/:taskId' element={<TaskDetails />} />

      <Route path='/dashboard' element={ <Dashboard/>}>
        <Route path='profile' element={ <Profile />}></Route>
        <Route path='settings' element={ <Settings />}></Route>
      </Route>

      <Route path='*' element={ <NotFound />} />
    </Routes>
    </>
  )
}

export default App
