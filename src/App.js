import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import CreateAccount from './components/Login/createaccount'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <CreateAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
