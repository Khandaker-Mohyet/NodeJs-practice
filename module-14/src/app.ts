import express,{Application, Request, Response} from 'express'
const app:Application = express()


app.get('/', (req: Request, res: Response) => {
  res.send('Khandaker Mohyet work station and I am learning next level')
})
app.get('/todos', (req: Request, res: Response) => {
  res.send('Khandaker Mohyet work station')
})
app.get('/todos/create-todo', (req: Request, res: Response) => {
  res.send('Khandaker Mohyet work station')
})

export default app;


