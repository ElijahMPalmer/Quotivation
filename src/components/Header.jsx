import React, { useState, useRef } from 'react'

function Header() {

  return (
    <div className='container'>
        <a>
          <img src="/images/Quotivation.svg" alt="" id='logo'/>
        </a>
        <div className='center-menu'>
          <a href="#">Our Choice Quotes</a>
          <a href="#">Stoicism Quotes</a>
        </div>

        <div className='right-menu'>
            <a href="#">Widget Mode</a>
        </div>
        
    </div>
  )
}

export default Header
