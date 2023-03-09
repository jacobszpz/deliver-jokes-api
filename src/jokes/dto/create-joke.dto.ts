import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateJokeDto {
  @IsNotEmpty()
  readonly setup: string;
  @IsNotEmpty()
  readonly punchline: string;
  @IsInt()
  readonly type: number;
}
