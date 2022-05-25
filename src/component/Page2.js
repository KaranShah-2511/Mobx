import React from "react";
import { useNameStore } from "../global/NameContext";
import { useObserver } from "mobx-react";
import { useState } from "react";

function Page2() {
  const nameStore = useNameStore();
  const [newName, setNewName] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const submit = (id) => {
    if (!newName) {
      setStatus("disabled");
      setError("Please enter a name");

    } else {
      console.log("new Name", newName, "Id", id);
      setError("");

      nameStore.addName(newName, id);

      setNewName(" ");
    }
  };

  return useObserver(() => (
    <div>
      <h1>Page 2</h1>
      {nameStore.names.map((a) => (
        <div style={{ display: "flex", padding: "20px" }}>
          <p style={{ padding: "10px" }}>{a.name}</p>
          <p style={{ padding: "10px" }}>Id: {a.id}</p>
          <input onChange={(e) => setNewName(e.target.value)} type="text" />
          <p>{error}</p>
          <button onClick={() => nameStore.removeName(a.id)}> Delete</button>
          {/* <button onClick={submit(a.id)}>submit</button> */}
          {/* <button onClick={(e) => nameStore.updateName(a.id, newName)}>
            submit
          </button> */}
          <button onClick={() => submit(a.id)} {...status}>
            submit
          </button>
        </div>
      ))}
    </div>
  ));
}

export default Page2;
