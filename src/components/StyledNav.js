import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to={'/'}
        className={({isActive})=>(isActive ? 'link active' : 'link')}>
            Beranda
        </NavLink>
        <NavLink to={'/coba'}
        className={({isActive})=>(isActive ? 'link active' : 'link')}>
        Tentang Kita</NavLink>
        <NavLink to={'/barang'}
        className={({isActive})=>(isActive ? 'link active' : 'link')}
        >Produk</NavLink>
    </nav>
  )
}

export default StyledNavbar