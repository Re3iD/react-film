import cl from './MyInput.module.scss'

import React from 'react'

const Myinput = ({change}) => {
    return (
        <div>
           <input className={cl.input} onChange={(e)=>change(e)} placeholder='search...' type='text'/> 
        </div>
    );
}

export default Myinput;

