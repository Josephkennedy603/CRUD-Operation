import React from "react";
import { useState } from "react";
import {userCollectionRef} from './App'
import { addDoc } from "firebase/firestore";
import './create.css'

const Create = ({refetchUser}) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPnumber] = useState();

  console.log({age, pnumber});

  const data1 ={
    Name:name,
    Age:age,
    Email:email,
    Pnumber:pnumber,
  };

  const handleClick = async () => {
    const data = await addDoc(userCollectionRef, data1);
    setName("");
    setAge("");
    setEmail("");
    setPnumber("");

    // refetchUser();
    console.log("for create ", data);
  }

  return (
<div className="main-input">
      <label htmlFor="Name">Name:</label>
      <input
        name="Name:"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label For="Age">Age:</label>
      <input
        type="number"
        name="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        required
      />

      <label htmlFor="Email">Email:</label>
      <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="Phone Number">Phone Number:</label>
      <input
        type="number"
        name="Phone Number"
        value={pnumber}
        onChange={(e) => setPnumber(Number(e.target.value)) }
        required
      />
      <input type="submit" onClick={handleClick}/>
      
    </div>

    
  );
};

export default Create;