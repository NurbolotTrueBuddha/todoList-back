import { Module } from "@nestjs/common";
import { TodoController } from "./controllers/todo.controller";
import { TaskRepository } from "./repository/task.repository";
import { Task } from "./entities/todo.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TodoController],
    providers: [TaskRepository]
})
export class TodoModule {}