const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring",()=>{
    console.log("Yahoo class says")
})
schoolBell.on("ring",()=>{
    console.log("Shat have another class")
})
schoolBell.on("broken",()=>{
    console.log("Oh no! class ke ar says hoba na")
})

schoolBell.emit("ring")
schoolBell.emit("broken")

