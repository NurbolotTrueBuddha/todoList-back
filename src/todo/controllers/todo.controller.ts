import { Controller, Get, Post, Delete, Put, Body, Param, Query, Headers } from "@nestjs/common";
import { TodoRepository } from "../repository/todo.repository";
import { Task } from "../utils/interfaces/task.interface";
import { AddTaskDto } from "../utils/dto/add-task.dto";

@Controller('/task')
export class TodoController {
    
    constructor(
        private todoRepository: TodoRepository,
    ){}


    @Post()
    addTask(@Body() task: AddTaskDto) {
        return this.todoRepository.addTask(task);
    }

    @Get() // finished
    async getTasks() {
        const taskData = await this.todoRepository.getTasks();
        return taskData;
    }

    @Delete(':id')  //finished
    deleteTask(@Param() param) {
        console.log(param)
        return this.todoRepository.deleteTask(param.id);
    }

    @Put() //finished
    updateTask( @Body() task:Task) {
        return this.todoRepository.updateTask(task);
    }
}