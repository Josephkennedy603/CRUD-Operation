import { useState } from 'react';
import './App.css';

const App = () => {

const [name,setName] =useState();
const [age,setAge] =useState();
const [email,setEmail] =useState();
const [pnumber,setPnumber] =useState();

  return(
    <div className='main-container'>
    <h1>CRUD Operation</h1>
    <form  action="">
      Name: <input type="text" name='Name:' onClick={(e)=>setName(e.target.value)} />
      Age: <input type="text" onClick={(e)=>setAge(e.target.value)} />
      Email: <input type="text" onClick={(e)=>setEmail(e.target.value)}/>
      Phone Number: <input type="number" onClick={(e)=>setPnumber(e.target.value)}/>
      <input type="submit" />
    </form>
    </div>
  )
}

export default App;
