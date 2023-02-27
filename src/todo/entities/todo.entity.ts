import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  order: string;

  @Column()
  task_text: string;
}

