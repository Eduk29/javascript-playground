import { mapPrototype } from "./src/map/mapPrototype";
import { everyPrototype } from "./src/every/everyPrototype";
import { findPrototype } from "./src/find/findPrototype";

const array = [1, 2, 3];

console.log(mapPrototype(array));
console.log(everyPrototype(array, (elem) => elem > 0));
console.log(findPrototype(array, (elem) => elem > 2));
