import { IsInt, IsEnum } from 'class-validator';
import { JokeType } from '../joke-type/joke-type.js';

export class GetJokeParams {
    @IsInt()
    readonly count?: number = 1;
    @IsEnum(JokeType)
    readonly type?: JokeType;
}
