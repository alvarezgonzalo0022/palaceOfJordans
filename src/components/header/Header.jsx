import React from 'react'
import { header, divs, imgHeader, spanHeader, iHeader } from './headerStyles'
import { TiShoppingCart } from 'react-icons/ti'

const Header = ({logo, name, count, handleView}) => {
  return (
    <header style={header}>
        <div style={divs}>
            <img style={imgHeader} src={logo} alt='' onClick={() => handleView("Local")}/>
            <h1>{name}</h1>
        </div>
        <div style={divs}>
            <TiShoppingCart style={iHeader} onClick={() => handleView("Cart")}/>
            <span style={spanHeader}>{count}</span>
        </div>
    </header>
  )
}

export default Header