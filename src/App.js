import React, { useState } from 'react';
import './App.css';
import {store} from './store';

export const App = () => {
  const [value, setValue] = useState('');

  const calculator = store.buttons.map((i) => {
    if (i[0] === '') setValue(0);
        switch(i.id) {
            case 1:
               return <input className={i.style} type='button' value={value} />
            case 2:
                return <input className={i.style} type='button' value={i.value} onClick={ () => { setValue('') } } />
            case 18:
                return <input className={i.style} type='button' value={i.value} onClick={ () => { 
                  let equal = (fn) => { // eslint-disable-next-line
                    return new Function('return ' + fn)()
                  } 
                  setValue(equal(0 + value))} } />
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