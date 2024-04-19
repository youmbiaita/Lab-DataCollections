// Part1: Refactoring Old Code
console.log("=========================================================");
console.log("Part 1: Refactororing Old Code")
console.log("============================================================")

let csvStr2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows = csvStr2.split('\n');
for (let s = 0; s < rows.length; s++) {
  let c = rows[s].split(',').join(" ");
  console.log(c);
}

// Part 2: Expanding Functionality
console.log("                                                            ")
console.log("=========================================================");
console.log("Part 2: Expanding Functionality")
console.log("============================================================")
console.log("                                                              ")
let masterArrays = [];
const rows3 = csvStr2.split('\n');
let numOfColumn = rows3.length; // declare a variable

masterArrays.push(rows3[0].split(","));
for (let s = 1; s < numOfColumn; s++) {
  masterArrays.push(rows3[s].split(",")); // parent array
}
console.log("The master Array is:")
console.log(masterArrays);

// //Part 3: Transforming Data
console.log("                                                            ")
console.log("=========================================================");
console.log("Part 3: Transforming Data")
console.log("============================================================")
console.log("                                                              ")
const heads = [];
for (let k = 0; k < masterArrays[0].length; k++) {
  heads.push(masterArrays[0][k].toLowerCase()); // conversion to lower case
}
const objectsArray = [];

for (let i = 1; i < masterArrays.length; i++) {
  const obj = {}; // object 
  for (let j = 0; j < heads.length; j++) {
    obj[heads[j]] = masterArrays[i][j];
  }
  objectsArray.push(obj);
}
console.log("The transformed Data is:")
console.log(objectsArray);

//Part4: Sorting and Manipulating Data
console.log("                                                            ")
console.log("=========================================================");
console.log("Part : Sorting and Manipulating Data");
console.log("============================================================");
console.log("                                                              ")

const removeObject = objectsArray.pop(); // remove element
console.log("Element removed is:");
console.log(removeObject);
//insert data
const insertData = objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

//add data
const addData = objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log("New array after all sorting is:");
console.log(objectsArray);


// Average age
let sumAge = 0;
for (let a = 0; a < objectsArray.length; a++) {
  sumAge += parseInt(objectsArray[a].age);
}
console.log(`Sum Age: ${sumAge}`);

const averageAge = sumAge / objectsArray.length;

console.log(`Average Age: ${averageAge}`);

// Part 5: Final Circle
console.log("                                                            ")
console.log("=========================================================");
console.log("Part 2: Expanding Functionality")
console.log("============================================================")
console.log("                                                              ")
//create headers
const headers = Object.keys(objectsArray[0]);

// i converted objects to rows
let newString = headers.join(" ") + "\n";
for (let i = 0; i < objectsArray.length; i++) {
  newString += Object.values(objectsArray[i]).join(' ') + "\n";
}
console.log("New array after circle:");
console.log(newString);
