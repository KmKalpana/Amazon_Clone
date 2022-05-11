import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='amazon-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo' />
      </Link>
      <p className='in'>.co.uk</p>
      <div className='header-search'>
        <input className='searchinput' type='text' />
        <SearchIcon className='search-icon' />
      </div>
      <div className='header-bar'>
        <div className='header-nav'>
          <Link to='/login'>
            <span className='line-one'>hello, Sign in</span>
            <br />
            <span className='line-two'><b>Account & Lists</b></span>
          </Link>
        </div>
        <div className='header-nav'>
          <span className='line-one'>Returns</span>
          <span className='line-two'> <b>& Order </b></span>
        </div>
        <Link to='/checkout'>
          <div className='shopping-icon'>
            <ShoppingIcon />
            <span className='count'>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
