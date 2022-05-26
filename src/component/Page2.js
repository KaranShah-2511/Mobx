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
  const [checkedData, setCheckedData] = useState([]);
  console.log("checkedData.....", checkedData);
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
  const move = () => {
    // console.log("checkedData.....", checkedData);
  
    nameStore.moveData(checkedData);
  };
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const id = target.id;

    if (value) {
      //   console.log("name", name);
      //   console.log("id", id);
      setCheckedData({
        ...checkedData,
        [id]: {
          name: name,
          id: id,
        },
      });
    }
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
          <input
            type="checkbox"
            name={a.name}
            id={a.id}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button onClick={move} {...status}>
        Move
      </button>
    </div>
  ));
}

export default Page2;
