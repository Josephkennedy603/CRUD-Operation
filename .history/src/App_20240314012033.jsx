import { useState, useEffect } from 'react';
import {collection, getDocs, onSnapshot, updateDoc,doc} from 'firebase/firestore'
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
  //   setUser(data.docs.map(doc => ({ // needs to clarify
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

const updateInput = async (id, name, age, email, pnumber) => {
  // Assuming you have a state to store the updated values
  const updatedName = prompt("Enter updated name:", name);
  const updatedAge = prompt("Enter updated age:", age);
  const updatedEmail = prompt("Enter updated email:", email);
  const updatedPnumber = prompt("Enter updated phone number:", pnumber);

  // Perform the update operation
  try {
    // Update the document in the Firestore collection
    await updateDoc(doc(db, 'record', id) , {
      Name: updatedName,
      Age: Number(updatedAge),
      Email: updatedEmail,
      Pnumber: Number(updatedPnumber),
    });
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

const deleteUser= async(userId)=>{
  const userDoc = doc(db,'record',userId);
  await deleteUser(userDoc);
}


  return(
    <div className='main-container'>
    <h1>CRUD Operation</h1> 
    {/* <Create  refetchUser={getUsers} /> */}
    <Create/> 
    <br/> 
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
          <td><button onClick={ () => updateInput(u.id,u.Name,u.Age,u.Email) }  style= {{backgroundColor:"lightgreen"}}>Update</button></td>
          <td><button onClick={()=> deleteUser(u.id)} style= {{backgroundColor:"#ff0000"}}>Delete</button></td>
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