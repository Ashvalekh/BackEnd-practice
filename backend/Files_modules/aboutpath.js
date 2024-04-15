import path from "path";

// console.log(path);

let myPath = "/workspaces/BackEnd-practice/backend/Files_modules/harry.txt";

console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("workspaces:/", "backend/harry.txt"));