import React from "react";

const create = () => {
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

export default create;
