import { Controller, Get, Post, Delete, Put, Body, Param, Query, Headers } from "@nestjs/common";
import { TodoRepository } from "../repository/todo.repository";
import { Task } from "../utils/interfaces/task.interface";
import { AddTaskDto } from "../utils/dto/add-task.dto";
import { AddTaskListDto } from "../utils/dto/add-task-list.dto";
import { DeleteTaskDto } from "../utils/dto/delete-task.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('/task')
export class TodoController {
    
    constructor(
        private todoRepository: TodoRepository,
    ){}


    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Post()
    addTask(@Body() task: AddTaskDto) {
        return this.todoRepository.addTask(task);
    }
    

    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Get()
    async getTasks() {
        const taskData = await this.todoRepository.getTasks();
        return taskData;
    }


    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Delete(':id')
    deleteTask(@Param() param: DeleteTaskDto) {
        console.log(param)
        return this.todoRepository.deleteTask(param.id);
    }


    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Put()
    updateTask( @Body() task: AddTaskDto) {
        return this.todoRepository.updateTask(task);
    }

}