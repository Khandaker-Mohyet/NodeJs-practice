"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
app.use("/todos", todosRouter);
const filePath = path_1.default.join(__dirname, '../db/todo.json');
app.get('/', (req, res) => {
    res.send('Welcome to TODOs app');
});
app.get('/todos', (req, res) => {
    // console.log(req.query)
    // console.log(req.params)
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    // console.log(data)
    res.send(data);
});
app.post('/todos/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log({ title, body });
    res.send('Khandaker Mohyet work station');
});
exports.default = app;
