import { useState, useEffect } from 'react';
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import {db} from './firebase'
import './App.css';
import Create from "./create";

export const  userCollectionRef =  collection(db,'record');
console.log("user data1",userCollectionRef)

const App = () => {
  const [user,setUser] = useState([]);

  // const getUsers = async ()=> {
  //   const data = await getDocs(userCollectionRef);
  //   console.log("data 2", data);
  //   setUser(data.docs.map(doc => ({    // needs to clarify
  //     ...doc.data(), 
  //     id: doc.id
  //   })));
  // };

  useEffect(()=>{
    console.log("user data3",user);
    // getUsers();
    const snapShot = onSnapshot(userCollectionRef, (snapshotparm)=>{
     setUser(snapshotparm.docs.map(doc=>({
      ...doc.data(),
      id: doc.id
     })))
    })

    return() => snapShot();
  }, []);
 
console.log(user);
  return(
    <div className='main-container'>
    <h1>CRUD Operation</h1> 
    {/* <Create  refetchUser={getUsers} /> */}
    
    <Create/> 

    {/* {user.map(u => (
      <p key={u.id}>{u.Pnumber}</p>
    ))} */}
    <br />
    <table border={1}>
    <tbody>
    <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Update</th>
              <th>Delete</th>
    </tr>
      {
      user.map(u => { 
        console.log(u)
        return (
         <tr key={u.id}> 
          <td>{u.Name}</td>
          <td>{u.Age}</td>
          <td>{u.Email}</td>
          <td>{u.Pnumber}</td>
          <td><button style="background-color: #ff0000;">Update</button></td>
          <td><button>Delete</button></td>
        </tr>)}
      )}
      </tbody>
    </table>
    </div>
  )
}

export default App;


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