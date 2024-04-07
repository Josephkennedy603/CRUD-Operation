
import { useState, useEffect } from 'react';
import {collection, addDoc, getDocs} from 'firebase/firestore'
import {db} from './firebase'
import './App.css';

const App = () => {

  const  userCollectionRef =  collection(db,'record');

  const [user,setUser] = useState([]);

  // const [name,setName] =useState();
  // const [age,setAge] =useState();
  // const [email,setEmail] =useState();
  // const [pnumber,setPnumber] =useState();

  useEffect(()=>{
    const getUsers = async ()=> {
      const data = await getDocs(userCollectionRef);
      console.log("OUT", data)
      setUser(data.docs.map(doc => ({
        ...doc.data(), 
        id: doc.id
      })));
    };
    getUsers();

  }, []);
 
console.log(user);

// const storeData =async () => {

//   const data ={
//     Name:name,
//     Age:age,
//     Email:email,
//     Pnumer:pnumber,
//   };

//   try{
//     const docRef = await addDoc(collection(db,"record"),data)
//   }
// catch(e){
//     console.log("unable to store the data",e)
// }

// console.log(data.name)

 

  return(
    <div className='main-container'>
    <h1>CRUD Operation</h1>
    {/* <form  action="">
      
      <label htmlFor="Name">Name:</label>
     <input name='Name:' type="text"   onChange={(e)=>setName(e.target.value) } required/>
    
      
      <label htmlFor="Age">Age:</label>
       <input type="text" name='Age'  onChange={(e)=>setAge(e.target.value)} required/>
      
      
      <label htmlFor="Email">Email:</label>
       <input type="Email"  onChange={(e)=>setEmail(e.target.value)} required/>
    
    
      <label htmlFor="Phone Number">Phone Number:</label>
     <input type="number" name='Phone Number'  onChange={(e)=>setPnumber(e.target.value)} required/>
     
      <input type="submit" onClick={storeData} />
      
    </form> */}
    </div>
  )
}

export default App;