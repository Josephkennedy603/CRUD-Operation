import React from "react";
import { useState } from "react";
import {userCollectionRef} from './App'
import { addDoc } from "firebase/firestore";

const Create = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPnumber] = useState();

  const data1 ={
    Name:name,
    Age:age,
    Email:email,
    Pnumer:pnumber,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await addDoc(userCollectionRef, data1);
    console.log("for create ", data);
  }

  return (
<div>
    <h1>create</h1>


    <form action="">
      <label htmlFor="Name">Name:</label>
      <input
        name="Name:"
        type="text"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="Age">Age:</label>
      <input
        type="text"
        name="Age"
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <label htmlFor="Email">Email:</label>
      <input type="Email" onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="Phone Number">Phone Number:</label>
      <input
        type="number"
        name="Phone Number"
        onChange={(e) => setPnumber(Number(e.target.value))}
        required
      />

      <input type="submit" onClick={handleClick} />
      </form>
    </div>

  );
};

export default Create;
