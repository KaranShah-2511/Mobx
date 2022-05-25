import { useLocalObservable } from "mobx-react";
import React from "react";
import { createNamesStore } from "../store/namesStore.js";

const NameContext = React.createContext(null);
//NameContext is file name   and set null value

export const NameProvider = ({ children }) => {
  const nameStore = useLocalObservable(createNamesStore);
  return (
      //children components
    <NameContext.Provider value={nameStore}>{children}</NameContext.Provider>
  );
};

//Create hooks to access this data everywhere 
export const useNameStore = () => React.useContext(NameContext);
