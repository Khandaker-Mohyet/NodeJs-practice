import express,{Application, Request, Response} from 'express';
import { todosRouter } from './app/todos/todos.route';
const app:Application = express()

app.use(express.json())

const userRouter = express.Router()

app.use("/todos", todosRouter)
app.use("/users", userRouter)


app.get('/', (req:Request, res:Response )=>{
    res.send("Welcome to Khandakers Todos")
})






export default app;


