import './App.css'
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'

function App() {

  return (
    <BrowserRouter>

      <h1> GET e Fetch e Axios</h1>
      <div>
      <Link to="/fetch-posts"> Fecth Posts </Link>
      <Link to="/axios-posts"> Axios Posts </Link>

      </div>

    <Routes>
      <Route path='/fetch-posts' element={<FetchPosts/>} />
      <Route path='/axios-posts' element={<AxiosPosts/>} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
