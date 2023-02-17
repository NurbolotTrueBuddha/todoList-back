import { ApiProperty } from '@nestjs/swagger';

export class AddTaskListDto {
    @ApiProperty()
    task_text: string;

    @ApiProperty()
    task_id: number;
}