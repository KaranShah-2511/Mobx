import React from "react";
import { useNameStore } from "../global/NameContext.js";
import { useState } from "react";
function Page1() {
  //import hooks from NameContext.js file
  const nameStore = useNameStore();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  const [indexNumber, setIndexNumber] = useState();

  const submit = () => {
    if (!name) {
      setStatus("disabled");
      setError("Please enter a name");
    } else {
      setError("");
      nameStore.addName(name, indexNumber);
      setName("");
    }
  };
  return (
    <div>
      <h1>Enter Name</h1>

      <input
        value={name || ""}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <input
        placeholder="Enter Index"
        onChange={(e) => setIndexNumber(e.target.value)}
        type="number" 
      />

      <p>{error}</p>
      <button onClick={submit} {...status}>
        Add note
      </button>
    </div>
  );
}

export default Page1;
