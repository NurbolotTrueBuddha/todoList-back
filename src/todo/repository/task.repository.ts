import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from "../entities/todo.entity";
import { AddTaskDto } from "../utils/dto/add-task.dto";

@Injectable()
export class TaskRepository {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    async addTask(task: AddTaskDto) {

        const userEntity = this.taskRepository.create(task);

        return await this.taskRepository.save(userEntity);
    }
    
    async getTasks(){

        const allUsers = await this.taskRepository.find();
        
        return allUsers
    }

    async deleteTask(id:string){

        const taskToRemove = await this.taskRepository.findOneBy({
            order : id
        })

        await this.taskRepository.remove(taskToRemove);

        return this.taskRepository.save(taskToRemove);

    }

    async updateTask(task: AddTaskDto){
        const taskToUpdate = await this.taskRepository.findOneBy({
            order : task.order
        })
        taskToUpdate.task_text = task.task_text;

        return await this.taskRepository.save(taskToUpdate);
    }

}