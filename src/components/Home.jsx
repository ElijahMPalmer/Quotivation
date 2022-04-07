import React, { useState, useRef } from 'react'

function Home({backgroundImg, title, description}){
    return(
        <div className='wrap'>
            <section>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </section>
        
        </div>
    );
}
export default Home;