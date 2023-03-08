import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { Joke } from './joke/joke';
import { JokeType } from './joke-type/joke-type';

@Module({
    imports: [TypeOrmModule.forFeature([Joke, JokeType])],
    controllers: [JokesController],
    providers: [JokesService]
})
export class JokesModule {}
