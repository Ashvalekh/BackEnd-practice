import fs from "fs/promises"

let a = await fs.readFile("harry.txt")

//append karne se inner text kharab nhi hoga
let  b = await fs.appendFile("harry.txt", "\n\n\n this is amazing promise")

console.log(a.toString(), b);