
import { useState } from 'react';
import './App.css';
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'

const App = () => {

const [name,setName] =useState();
const [age,setAge] =useState();
const [email,setEmail] =useState();
const [pnumber,setPnumber] =useState();


const storeData =() => {

  const data ={
    Name:name,
    Age:age,
    Email:email,
    Pnumer:pnumber
  };
  alert (data.Age)
 }



  return(
    <div className='main-container'>
    <h1>CRUD Operation</h1>
    <form  action="">
      <div>
      <label htmlFor="Name">Name:</label>
     <input name='Name:' type="text"  onClick={(e)=>setName(e.target.value)} />
      </div>
      <div>
      <label htmlFor="Age">Age:</label>
       <input type="text" name='Age' onClick={(e)=>setAge(e.target.value)} />
      </div>
      <div>
      <label htmlFor="Email">Email:</label>
       <input type="Email" onClick={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="Phone Number">Phone Number:</label>
     <input type="number" name='Phone Number' onClick={(e)=>setPnumber(e.target.value)}/>
     </div>
      <input type="submit" onClick={storeData()} />
      
    </form>
    </div>
  )
}

export default App;
