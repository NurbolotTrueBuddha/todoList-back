import { ApiProperty } from '@nestjs/swagger';

export class AddTaskDto {
    @ApiProperty()
    order: string;
    @ApiProperty()
    task_text: string;
}