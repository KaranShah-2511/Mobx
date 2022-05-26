import React from "react";
import { useNameStore } from "../global/NameContext";
import { useObserver } from "mobx-react";
import { useState } from "react";
import { confirm } from "react-confirm-box";

function Page2() {
  const del = async (id, name) => {
    console.log("id", id);
    const result = await confirm("Are you sure you want to delete?");
    console.log("result.....", result);
    console.log("name", name);
    if (result) {
      nameStore.deletedName(id, name);
      setdelmessage(name + " deleted");
      //   return;
    }
    // console.log("You click No!");
  };

  const nameStore = useNameStore();
  const [newName, setNewName] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  const [delmessage, setdelmessage] = useState();

  const submit = (id) => {
    if (!newName) {
      setStatus("disabled");
      setError("Please enter a name");
    } else {
      setError("");

      nameStore.addName(newName, id);
    }
    setNewName("");
    console.log("new Name", newName, "Id", id);
  };

  return useObserver(() => (
    <div>
      <p>{delmessage}</p>
      {nameStore.names.map((a) => (
        <div style={{ display: "flex", padding: "20px" }}>
          <p style={{ padding: "10px" }}>{a.name}</p>
          <p style={{ padding: "10px" }}>Id: {a.id}</p>
          <input
            name={a.id}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
          />
          <p>{error}</p>
          <button onClick={() => del(a.id, a.name)}> Delete</button>

          {/* <button onClick={() => nameStore.removeName(a.id)}> Delete</button> */}
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
