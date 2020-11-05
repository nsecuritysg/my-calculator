import React, { useState } from 'react';
import './App.css';
import {store} from './store';

export const App = () => {
  const btns = store.buttons;
  const [value, setValue] = useState(0);

  const calculator = btns.map((i) => {
        switch(i.id) {
            case 1:
               return <input className={i.style} type='button' value={value} />
            case 2:
                return <input className={i.style} type='button' value={i.value} onClick={ () => { setValue(0) } } />
            case 18:
                return <input className={i.style} type='button' value={i.value} onClick={ () => { 
                  let equal = (fn) => { // eslint-disable-next-line
                    return new Function('return ' + fn)()
                  } 
                  setValue(equal(value))} } />
            default:
                return <input className={i.style} type='button' value={i.value} 
                  onClick={ () => { setValue(value + i.value) } } />
        }                 
  })
  return (
    <>
      {calculator}
    </>
  )
}