import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './joke/joke';
import { JokeType } from './joke-type/joke-type';

@Injectable()
export class JokesService {
    constructor(
        @InjectRepository(Joke)
        private jokesRepository: Repository<Joke>,
    ) {}

    findAll(): Promise<Joke[]> {
        return this.jokesRepository.find();
    }

    findByType(type: JokeType, count: number) : Joke[] {
        return [];
    }

}
