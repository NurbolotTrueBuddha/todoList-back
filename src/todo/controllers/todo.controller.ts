import { Controller, Get, Post, Delete, Put, Body } from "@nestjs/common";
import { TodoRepository } from "../repository/todo.repository";
import { Task } from "../utils/interfaces/task.interface";

@Controller('task')
export class TodoController {
    
    constructor(
        private todoRepository: TodoRepository,
    ){}


    @Post()
    addTask(@Body() task: Task) {
        return this.todoRepository.addTask(task);
    }

    @Get()
    getTasks() {
        return this.todoRepository.getTasks();
    }

    @Delete()
    deleteTask() {
        
    }

    @Put()
    updateTask() {
        
    }
}