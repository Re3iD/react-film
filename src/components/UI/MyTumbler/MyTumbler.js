import cl from './MyTumbler.module.scss'

import React from 'react';

const Mytumbler = ({forSwitch,placeHold}) => {
    return (
        <div className={cl.cont}>
            <label className={cl.switch}>
                <input onClick={forSwitch} type="checkbox"/>
                <span className={cl.slider}></span>
            </label>
        </div>
    );
}

export default Mytumbler;
