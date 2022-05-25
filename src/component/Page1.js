import React from "react";
import { useNameStore } from "../global/NameContext.js";
import { useState } from "react";
function Page1() {
  //import hooks from NameContext.js file
  const nameStore = useNameStore();
  const [name, setName] = useState();
  const [status, setStatus] = useState();

  const submit = () => {
    if (!name) {
      setStatus("disabled");
    } else {
      nameStore.addName(name);
      setName("");
    }
  };

  return (
    <div>
      <h1>Page 1</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />

      <button onClick={submit} {...status}>
        Add note
      </button>
    </div>
  );
}

export default Page1;
