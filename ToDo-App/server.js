const http = require("http")

const server = http.createServer((req,res)=>{
    // console.log(req.url, req.method)
    // res.end("Welcome to ToDo App Server")
    if(req.url === "/todos" && req.method === "GET"){
        res.writeHead(200,{
            "content-type":"text/plain"
        })
        res.end("Hello ToDos")
    } else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.end("Todo Created")
    }else{
        res.end("Route not found")
    }
})

server.listen(5000, "127.0.0.1", ()=>{
    console.log("Server listening to port 5000")
})