
import { useState, useEffect } from 'react';
import {collection, addDoc, getDocs} from 'firebase/firestore'
import {db} from './firebase'
import './App.css';

const App = () => {

  const  userCollectionRef =  collection(db,'record');

  const [user,setUser] = useState([]);

  

  useEffect(()=>{
    const getUsers = async ()=> {
      const data = await getDocs(userCollectionRef);
      console.log("OUT", data);
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
    <table border={1}>
    <tbody>
    <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone Number</th>
    </tr>
      {
      user.map(u => (
         <tr key={u.id}> 
          
          <td >{u.Name}</td>
          <td>{u.Age}</td>
          <td>{u.Email}</td>
          <td>{u.Pnumber}</td>
          
        </tr>)
      )}
      </tbody>
    </table>

    
    </div>
  )
}

export default App;