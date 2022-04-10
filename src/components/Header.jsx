import React, { useState, useRef } from 'react'

function Header({changeCategory}) {

  return (
    <div className='container'>
        <a>
          <img src="/images/Quotivation.svg" alt="" id='logo'/>
        </a>
        <div className='center-menu'>
          <a href="#" onClick={() => changeCategory('ourChoice')}>Our Choice Quotes</a>
          <a href="#" onClick={() => changeCategory('prog')} >Programming Quotes</a>
        </div>

       
        
    </div>
  )
}

export default Header
