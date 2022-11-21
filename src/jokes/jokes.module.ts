import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { Joke } from './joke/joke';
import { JokeTypeEntity } from './joke-type/joke-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Joke, JokeTypeEntity])],
    controllers: [JokesController],
    providers: [JokesService]
})
export class JokesModule {}
