import express,{Application, Request, Response} from 'express';
import fs from "fs"
import path from "path"
const app:Application = express()

app.use(express.json())

const todosRouter = express.Router();

app.use("/todos", todosRouter)

const filePath = path.join(__dirname, '../db/todo.json')


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TODOs app')
})
app.get('/todos', (req: Request, res: Response) => {
  // console.log(req.query)
  // console.log(req.params)
  const data = fs.readFileSync(filePath, { encoding: "utf-8" })
        
  // console.log(data)
  res.send(data)
})
app.post('/todos/create-todo', (req: Request, res: Response) => {
  const {title, body} = req.body;
  console.log({title, body})
  res.send('Khandaker Mohyet work station')
})

export default app;


