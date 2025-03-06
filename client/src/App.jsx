import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer';
import Error from './pages/error/Error';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
