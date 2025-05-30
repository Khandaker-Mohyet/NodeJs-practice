const fs = require("fs")

// const text = "Learning file system"

// fs.writeFileSync("./hello.txt", text)

// const data = fs.readFileSync("./hello.txt",{encoding: "utf-8"});

// console.log(data);

console.log("Task 1")



const text = 'node js';

fs.writeFile('./hello.txt', text, {encoding: "utf-8"}, (err, data) => {
  if (err) {
    console.log('Error writing file:', err);
    return;
  }
  console.log('After writing', data);
});


fs.readFile('./hello.txt', {encoding:"utf-8"}, (err, data)=>{
    if(err){
        console.log("Something went wrong",err)
        return
    }
    console.log(data)
});



console.log('Task 3')