import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to={'/'}>Beranda</Link>
        <Link to={'/coba'}>Tentang Kita</Link>
        <Link to={'/barang'}>Produk</Link>
    </nav>
  )
}

export default Navbar