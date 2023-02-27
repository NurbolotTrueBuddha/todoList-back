import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './todo/entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'keiz',
      database: 'soliddb',
      entities: [Task],
      synchronize: true
    }),
    TodoModule
  ]
})
export class AppModule {}

