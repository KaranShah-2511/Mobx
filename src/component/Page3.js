import React from "react";
import { useNameStore } from "../global/NameContext";
import { useObserver } from "mobx-react";
import { useState } from "react";
import { confirm } from "react-confirm-box";

function Page3() {
  const nameStore = useNameStore();
  const del = async (id, name) => {
    console.log("id", id);
    const result = await confirm("Are you sure you want to recover?");
    console.log("result.....", result);
    console.log("name", name);
    if (result) {
      nameStore.undoName(id, name);
    }
  };

  return useObserver(() => (
    <div>
      <h1>secondArray</h1>
      {nameStore.secondArray.map((a) => (
        <div style={{ display: "flex", padding: "20px" }}>
          <p style={{ padding: "10px" }}>{a.name}</p>
          <p style={{ padding: "10px" }}>Id: {a.id}</p>
        </div>
      ))}

      <h1>Deleted Data</h1>

      {nameStore.deleteNames.map((a) => (
        <div style={{ display: "flex", padding: "20px" }}>
          <p style={{ padding: "10px" }}>{a.name}</p>
          <p style={{ padding: "10px" }}>Id: {a.id}</p>
          <button onClick={() => del(a.id, a.name)}> Undo</button>
        </div>
      ))}
    </div>
  ));
}

export default Page3;
