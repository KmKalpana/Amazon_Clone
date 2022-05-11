import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import CreateAccount from './components/Login/createaccount'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<div> <Header /> <Home /> </div>}
          />
          <Route
            path='/checkout'
            element={<div> <Header /> <Checkout /> </div>}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<CreateAccount />}
          />
        </Routes>
      </div>
    </Router>
  )
}
export default App
