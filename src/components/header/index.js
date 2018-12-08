import React from 'react'
import SearchBar from './searchBar'


import './header.css'

function Header (params) {
  return (
    <header className='header__container'>
       <h1 className='header__logo'>userdocs.org</h1>
       <SearchBar className='header__search'/>
    </header>
  )
}

export default Header
