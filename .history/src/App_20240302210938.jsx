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
      <label htmlFor="Name"></label>
      Name: <input name='Name:' type="text"  onClick={(e)=>setName(e.target.value)} />
      <label htmlFor="Age"></label>
      Age: <input type="text" name='Age' onClick={(e)=>setAge(e.target.value)} />
      <label htmlFor="Email"></label>
      Email: <input type="Email" onClick={(e)=>setEmail(e.target.value)}/>
      <label htmlFor="Phone Number"></label>
      Phone Number: <input type="number" name='Phone Number' onClick={(e)=>setPnumber(e.target.value)}/>
      <input type="submit" />
    </form>
    </div>
  )
}

export default App;
