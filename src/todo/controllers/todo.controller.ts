import { Controller, Get, Post, Delete, Put, Body, Param } from "@nestjs/common";
import { TodoRepository } from "../repository/todo.repository";
import { Task } from "../utils/interfaces/task.interface";

@Controller('/task')
export class TodoController {
    
    constructor(
        private todoRepository: TodoRepository,
    ){}


    @Post()
    addTask(@Body() task: Task) {
        return this.todoRepository.addTask(task);
    }

    @Get() // finished
    async getTasks() {
        const taskData = await this.todoRepository.getTasks();
        return taskData;
    }

    @Delete(':id')
    deleteTask(@Param() param) {
        console.log(param)
        return this.todoRepository.deleteTask(param.id);
    }

    @Put()
    updateTask() {
        
    }
}