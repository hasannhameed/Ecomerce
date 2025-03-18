import React from 'react'
import MyContext from './myContext'
import { useState } from 'react'


const MyState = (props) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if(mode === 'light'){
            document.body.style.color = 'rgb(17, 24, 39)';
            setMode("dark");
        }else{
            document.body.style.color = 'white';
            setMode('light');
        }
    }

  return (
     <MyContext.Provider value={{toggleMode, mode}}>
        {props.children}
     </MyContext.Provider>
  )
}

export default MyState
