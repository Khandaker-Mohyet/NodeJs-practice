const fs = require("fs")

// const text = "Learning file system"

// fs.writeFileSync("./hello.txt", text)

// const data = fs.readFileSync("./hello.txt",{encoding: "utf-8"});

// console.log(data);




// fs.readFile('./hello-world.txt', { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("Something went wrong", err)
//         return
//     }
//     fs.writeFile('./hello.txt', data, { encoding: "utf-8" }, (err) => {
//         if (err) {
//             console.log('Error writing file:', err);
//             return;
//         }
//         console.log('After writing');
//     });
// });


const readStream = fs.createReadStream("./hello-world.txt", {encoding: "utf-8"});
const writeStream = fs.createWriteStream("./hello.txt", {encoding: "utf-8"})

readStream.on("data", (data)=>{
    console.log(data)

    writeStream.write(data,(err)=>{
        if(err){
            throw Error("Error", err)
        }
    })
})

readStream.on("error",(err)=>{
    if(err){
            throw Error("Error", err)
        }
})

readStream.on("end",()=>{
    console.log("reading ended");
    writeStream.end()
})

writeStream.on("finish",()=>{
    console.log("written successfully")
})
