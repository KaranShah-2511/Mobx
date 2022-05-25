import { nanoid } from "nanoid";

export function createNamesStore() {
  return {
    names: [],
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
    removeName(id) {
      this.names = this.names.filter((name) => name.id !== id);
    },
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
