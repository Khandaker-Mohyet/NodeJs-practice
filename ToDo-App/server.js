const http = require("http")

const data = [
  {
    "title": "prisma",
    "body": "Learning prisma",
    "createdAt": "5/18/2025, 1:25:02 AM"
  },
  {
    "title": "typescript",
    "body": "learning node",
    "createdAt": "5/18/2025, 1:25:12 AM"
  },
  {
    "title": "express",
    "body": "Learning advanced express",
    "createdAt": "5/29/2025, 5:55:16 AM"
  },
  {
    "title": "mongodb",
    "body": "learning mongodb",
    "createdAt": "5/29/2025, 5:55:46 AM"
  }
]

const server = http.createServer((req,res)=>{
    // console.log(req.url, req.method)
    // res.end("Welcome to ToDo App Server")
    if(req.url === "/todos" && req.method === "GET"){
        res.writeHead(200,{
            "content-type":"application/json",
        })
        // res.setHeader("content-type", "text/plain");
        // res.setHeader("email", "ph2@gmail.com");
        // res.statusCode = 201;
        res.end(JSON.stringify(data))
    } else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.end("Todo Created")
    }else{
        res.end("Route not found")
    }
})

server.listen(5000, "127.0.0.1", ()=>{
    console.log("Server listening to port 5000")
})