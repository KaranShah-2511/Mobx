import React from "react";
import { useNameStore } from "../global/NameContext.js";
import { useState } from "react";
function Page1() {
  //import hooks from NameContext.js file
  const nameStore = useNameStore();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const submit = () => {
    if (!name) {
      setStatus("disabled");
      setError("Please enter a name");
    } else {
      setError("");
      nameStore.addName(name);
      setName("");
    }
  };

  return (
    <div>
      <h1>Enter Name</h1>
      <input
        value={name || ''}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <p>{error}</p>
      <button onClick={submit} {...status}>
        Add note
      </button>
    </div>
  );
}

export default Page1;
