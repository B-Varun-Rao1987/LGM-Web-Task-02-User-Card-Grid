import React from 'react'
import './navbar.css';
export default function NavBar({onButtonClick}) {
  return (
    <header>
        <div className="headText"><span>UsersData</span></div>
        <button className="btn" onClick = {onButtonClick}>Get!</button>
    </header>
  )
}

