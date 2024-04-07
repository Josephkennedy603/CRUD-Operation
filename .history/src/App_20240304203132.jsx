
import { useState } from 'react';
import './App.css';
import {collection, addDoc} from 'firebase/firestore'
import {db} from './firebase'

const App = () => {
 
const [name,setName] =useState();
const [age,setAge] =useState();
const [email,setEmail] =useState();
const [pnumber,setPnumber] =useState();

const storeData =async () => {

  const data ={
    Name:name,
    Age:age,
    Email:email,
    Pnumer:pnumber,
  };

 
  try{
    const docRef = await addDoc(collection(db,"record"),data)

  }
catch(e){
    console.log("unable to store the data",e)
}

console.log(storeData)

 }

  return(
    <div className='main-container'>
    <h1>CRUD Operation</h1>
    <form  action="">
      <div>
      <label htmlFor="Name">Name:</label>
     <input name='Name:' type="text"   onChange={(e)=>setName(e.target.value) } required/>
      </div>
      <div>
      <label htmlFor="Age">Age:</label>
       <input type="text" name='Age'  onChange={(e)=>setAge(e.target.value)} required/>
      </div>
      <div>
      <label htmlFor="Email">Email:</label>
       <input type="Email"  onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div>
      <label htmlFor="Phone Number">Phone Number:</label>
     <input type="number" name='Phone Number'  onChange={(e)=>setPnumber(e.target.value)} required/>
     </div>
      <input type="submit" onClick={storeData} />
      
    </form>
    </div>
  )
}

export default App;
