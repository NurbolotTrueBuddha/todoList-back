import { Injectable } from "@nestjs/common";
import { Task } from "../utils/interfaces/task.interface";

@Injectable()
export class TodoRepository {

    getTasks() {
        return 'Массив задач...'
    }

    addTask(task: Task) {
        return 'Задача добавлена';
    }

    deleteTask() {
        
    }

    updateTask() {
        
    }
}