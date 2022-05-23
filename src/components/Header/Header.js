import React from 'react'
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import "./Header.scss";

const Header = () => {
  return (
<div className="header">
  <Link to="/"> 
  <div className="logo">Vimal's Movie App</div>
  </Link>  
 
  <div className="user-image">
      <img src={user} height={65} width={70}alt="" />
  </div>


    </div>
  )
}

export default Header
