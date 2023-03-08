import { IsInt, IsEnum, Min } from 'class-validator';
import { JokeType } from '../joke-type/joke-type.js';

export class GetJokeParams {
    @IsInt()
    @Min(1)
    readonly count: number = 1;
    readonly type: string;
}
