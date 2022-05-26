import { nanoid } from "nanoid";

export function createNamesStore() {
  return {
    names: [],
    deleteNames: [],
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
    // removeName(id) {
    //   this.names = this.names.filter((name) => name.id !== id);
    // },
    deletedName(id, name) {
      this.deleteNames.push({ name, id: id });
      this.names = this.names.filter((name) => name.id !== id);

    },
    // recoverName(id, name) {
    //   this.deleteNames = this.deleteNames.filter((name) => name.id !== id);
    // },
    undoName(id, name) {
        this.names.push({ name, id: id });
        this.deleteNames = this.deleteNames.filter((name) => name.id !== id);
        }
  };
}

// import { nanoid } from "nanoid";

// export function createNamesStore() {
//   return {
//     names: [],
//     addName(name) {
//       console.log(name, this.names);

//       this.names.push({ name, id: nanoid() });
//     },
//     removeName(id) {
//       this.names = this.names.filter((name) => name.id !== id);
//     },
//     updateName(id, newName) {
//       const oldName = this.names.find((name) => name.id == id);
//       if (oldName) {
//         oldName.name = newName;
//       }
//     },
//   };
// }
