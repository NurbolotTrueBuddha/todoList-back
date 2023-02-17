import { ApiProperty } from '@nestjs/swagger';

export class DeleteTaskDto {
    @ApiProperty()
    id: number;
}