import React from 'react'
import { NavLink } from 'react-router-dom'

import SearchBar from '../searchBar'

import './header.css'

function Header (params) {
  return (
    <header className='header__container'>
      <NavLink className='header__logo__link' to='/'>
        <h1 className='header__logo'>userdocs.org</h1>
      </NavLink>
      <SearchBar className='header__search'/>
    </header>
  )
}

export default Header
