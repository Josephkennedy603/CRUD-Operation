import React from "react";
import { useState } from "react";
import {userCollectionRef} from './App'
import { addDoc } from "firebase/firestore";

const Create = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState();
  const [pnumber, setPnumber] = useState(0);

  const data1 ={
    Name:name,
    Age:age,
    Email:email,
    Pnumer:pnumber,
  };

  const handleClick = async () => {
    const data = await addDoc(userCollectionRef, data1);
    console.log("for create ", data);
  }

  return (
<div>
    <h1>create</h1>
      <label htmlFor="Name">Name:</label>
      <input
        name="Name:"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="Age">Age:</label>
      <input
        type="number"
        name="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <label htmlFor="Email">Email:</label>
      <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="Phone Number">Phone Number:</label>
      <input
        type="number"
        name="Phone Number"
        value={pnumber}
        onChange={(e) => setPnumber(e.target.value) }
        required
      />
      <input type="submit" onClick={handleClick}/>
    </div>
  );
};

export default Create;