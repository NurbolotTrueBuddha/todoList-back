import { ApiProperty } from '@nestjs/swagger';

export class AddTaskDto {
    @ApiProperty()
    task_text: string;

    @ApiProperty()
    task_id: number;
}