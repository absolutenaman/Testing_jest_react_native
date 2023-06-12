import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function removelOfSpaces(string)
{
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function App() {
  
  const[color,setColor]=useState(removelOfSpaces("MediumVioletRed"));
  const[text,setText]=useState('Change to Midnight Blue');
  const[flag,setFlag]=useState('unchecked');
  const [disabled,setDisabled]=useState(false);
  const[buttonDisplay,setButtonDisplay]=useState('inherit');
  function clickEvent()
  {
  setColor(color===removelOfSpaces("MediumVioletRed")?removelOfSpaces("MidnightBlue"):removelOfSpaces("MediumVioletRed"));
  setText(text==='Change to Midnight Blue'?'Change to Medium Violet Red':'Change to Midnight Blue');
  }
  return (
   <div>
    <button style={{backgroundColor:color}} disabled={disabled}  onClick={clickEvent}>{text}</button>
    <input type='checkBox'  onChange={(e)=>
    {
      console.log(disabled)
      setDisabled(disabled===false?true:false);
      console.log(disabled)

      setColor(disabled===false?'grey':color);
    }
    } ></input>
   </div>
  );
}

export default App;
