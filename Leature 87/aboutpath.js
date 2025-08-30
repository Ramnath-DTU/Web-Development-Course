import path from "path"

let myPath = "F:\\Sigma Web Development Course\\Web-Development-Course\\Leature 87\\harry.txt"

console.log(path.extname(myPath)) // It will tell the type of txt file
console.log(path.dirname(myPath)) // It will tell the path address
console.log(path.basename(myPath)) // It will tell the file name

console.log(path.join("c:/", "programs\\harry.txt"))