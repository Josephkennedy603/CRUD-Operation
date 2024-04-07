import React from "react";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPnumber] = useState();

  return (
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
        onChange={(e) => setPnumber(e.target.value)}
        required
      />

      <input type="submit" onClick={storeData} />
    </form>
  );
};

export default Create;
