const http = require("http")
const path = require("path")
const fs = require("fs")

const filePath = path.join(__dirname, './db/todo.json')


const server = http.createServer((req,res)=>{

    // get all todos
    
    if(req.url === "/todos" && req.method === "GET"){
        const data = fs.readFileSync(filePath, {encoding: "utf-8"})
        res.writeHead(200,{
            "content-type":"application/json",
        })
        res.end(data)

        // Post todos

    } else if(req.url === "/todos/create-todo" && req.method === "POST"){

        let data =""

        req.on("data", (chunk)=>{
            data = data + chunk
        })

        req.on("end", ()=>{
            
            const {title, body} = JSON.parse(data);
            
            const createdAt = new Date().toLocaleString();

            const allTodos = fs.readFileSync(filePath,{encoding: "utf-8"});

            const parsedAllTodos = JSON.parse(allTodos)
            console.log(allTodos)

            parsedAllTodos.push({title, body, createdAt})

            fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {encoding: "utf-8"})

            res.end(JSON.stringify({title, body, createdAt},null, 2))
        })

        
    }else{
        res.end("Route not found")
    }
})

server.listen(5000, "127.0.0.1", ()=>{
    console.log("Server listening to port 5000")
})