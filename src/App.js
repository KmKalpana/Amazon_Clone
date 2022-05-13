import './App.css'
import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import CreateAccount from './components/Login/createaccount'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { auth } from './components/Login/firebase'
import { useStateValue } from './StateProvide'
const App = () => {
  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log('The auth use is : ', authUser)
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
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
