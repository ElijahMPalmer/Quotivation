import React, { useState, useRef } from 'react'


function Home({backgroundImg, quote, author}){
    return(
        <div className='wrap animate' id='wrap'>
                <section id='quote-container'>
                    <h1>{ quote }</h1>
                    <p id='author'>-{ author }</p>
                </section>
        </div>
    );
}
export default Home;