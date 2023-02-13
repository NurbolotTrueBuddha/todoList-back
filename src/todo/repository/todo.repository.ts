import { Injectable } from "@nestjs/common";
import * as fs from "fs/promises";
import { Task } from "../utils/interfaces/task.interface";
import * as path from 'path';
import { TaskList } from "../utils/interfaces/task-list.interface";

@Injectable()
export class TodoRepository {

    async getTasks() {
        const filePath = path.join(__dirname, '../entities/todo.entity.json');

        const taskData = await fs.readFile(filePath, { encoding: 'utf-8' }); // procession...
        const taskDataParsed: TaskList = JSON.parse(taskData);

        return taskDataParsed.todoList;
    }

    async addTask(task: Task) {
        const filePath = path.join(__dirname, '../entities/todo.entity.json');
        const taskData = await fs.readFile(filePath, { encoding: 'utf-8' }); // procession...
        const taskDataParsed: TaskList = JSON.parse(taskData);

        taskDataParsed.todoList.push(task);

        await fs.writeFile(filePath, JSON.stringify(taskDataParsed, null, 2));

        return taskDataParsed.todoList;
    }

    async deleteTask(id: number) {
        const filePath = path.join(__dirname, '../entities/todo.entity.json');
        const taskData = await fs.readFile(filePath, { encoding: 'utf-8' }); // procession...
        const taskDataParsed: TaskList = JSON.parse(taskData);

        let newArray: Task[] = [];
        taskDataParsed.todoList.forEach((item) => {
            if(item.task_id !== id) {
                newArray.push(item)
            }
        })
        taskDataParsed.todoList = newArray;


        return taskDataParsed.todoList;
    }

    async updateTask(task: Task) {

        const filePath = path.join(__dirname, '../entities/todo.entity.json');
        const taskData = await fs.readFile(filePath, { encoding: 'utf-8' }); // procession...
        const taskDataParsed: TaskList = JSON.parse(taskData);

        let newArray: Task[] = [];

        taskDataParsed.todoList.forEach((item) => {
            if(item.task_id !== task.task_id) {
                newArray.push(item)
            }
        })
        
        taskDataParsed.todoList = newArray;

        taskDataParsed.todoList.push(task);

        await fs.writeFile(filePath, JSON.stringify(taskDataParsed, null, 2));

        return taskDataParsed.todoList;

    }
}