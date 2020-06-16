import React , {useState} from 'react';
import './App.css';
import {Color} from './color'

function App() {

  let [counter , setCounter] = useState(2);
  let [mood , setMood] = useState(false);
 
  return (
    <div className={`${mood ? 'dark' : 'light'}`}>
      <Color counter={counter}/>
      <hr/>
      <button onClick={()=> setCounter(--counter)}>-</button>
      <button onClick={()=> setCounter(++counter)}>+</button>
      
      <br/>
      <select onChange={()=> setMood(!mood)}>
      <option>Light Mood</option>
      <option>Dark Mood</option>
      </select>

    </div>
  );
}

export default App;
