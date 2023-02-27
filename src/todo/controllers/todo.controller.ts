import { Controller, Get, Post, Delete, Put, Body, Param, Query, Headers } from "@nestjs/common";
import { TaskRepository } from "../repository/task.repository";
import { AddTaskDto } from "../utils/dto/add-task.dto";
import { AddTaskListDto } from "../utils/dto/add-task-list.dto";
import { DeleteTaskDto } from "../utils/dto/delete-task.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('/task')
export class TodoController {
    
    constructor(
        private taskRepository: TaskRepository,
    ){}


    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Post()
    addTask(@Body() task: AddTaskDto) {
        return this.taskRepository.addTask(task);
    }
    

    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Get()
    async getTasks() {
        const taskData = await this.taskRepository.getTasks();
        return taskData;
    }


    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Delete(':id')
    deleteTask(@Param() param: DeleteTaskDto) {

        return this.taskRepository.deleteTask(param.id);
    }


    @ApiResponse({
        type: [AddTaskListDto],
        status: 202
    })
    @Put()
    updateTask( @Body() task: AddTaskDto) {
        return this.taskRepository.updateTask(task);
    }

}