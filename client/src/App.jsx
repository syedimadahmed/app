import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
