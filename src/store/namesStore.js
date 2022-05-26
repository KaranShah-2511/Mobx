import { nanoid } from "nanoid";

export function createNamesStore() {
 
  return {
    names: [],
    deleteNames: [],
    secondArray: [],
    addName(name, id) {
      if (id) {
        const oldName = this.names.find((name) => name.id == id);
        if (oldName) {
          oldName.name = name;
        }
      } else {
        console.log(name, this.names);

        this.names.push({ name, id: nanoid() });
      }
    },

    deletedName(id, name) {
      this.deleteNames.push({ name, id: id });
      this.names = this.names.filter((name) => name.id !== id);
    },

    undoName(id, name) {
      this.names.push({ name, id: id });
      this.deleteNames = this.deleteNames.filter((name) => name.id !== id);
    },
    moveData(items) {
      console.log("items....", items);
     
      //   this.names.push(items);
    },
  };
}
