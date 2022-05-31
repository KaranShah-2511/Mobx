import { nanoid } from "nanoid";

export function createNamesStore() {
  return {
    names: [],
    deleteNames: [],
    secondArray: [],
    //add name
    addName(name, index) {
      if (index) {
          this.names.splice(index, 0, {
              name,
              id: nanoid(),
          });
      } else {
        console.log(name, this.names);

        this.names.push({ name, id: nanoid() });
      }
    },

    //update name
    updateName(newName, id) {
      const oldName = this.names.find((name) => name.id == id);
      if (oldName) {
        oldName.name = newName;
      }
    },

    //delete name
    deletedName(id, name) {
      this.deleteNames.push({ name, id: id });
      this.names = this.names.filter((name) => name.id !== id);
    },

    //undo name

    undoName(id, name) {
      this.names.push({ name, id: id });
      this.deleteNames = this.deleteNames.filter((name) => name.id !== id);
    },

    //move data
    moveData(items) {
      console.log("items....", items);
      let i = 0;
      let name = "";
      let id = "";
      for (i = 0; i < items.length; i++) {
        name = items[i].name;
        id = items[i].id;
        console.log("name....", name);
        console.log("id....", id);
        // this.secondArray.push({ name, id: id });
        this.secondArray.splice(0, 0, {
            name,
            id: id
        });
        this.names = this.names.filter((name) => name.id !== id);
      }
    },
  };
}
