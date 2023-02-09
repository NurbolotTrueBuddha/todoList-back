import { Module } from "@nestjs/common";
import { TodoController } from "./controllers/todo.controller";
import { TodoRepository } from "./repository/todo.repository";

@Module({
    controllers: [TodoController],
    providers: [TodoRepository]
})
export class TodoModule {}