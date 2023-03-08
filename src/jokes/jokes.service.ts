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
        @InjectRepository(JokeType)
        private jokeTypesRepository: Repository<JokeType>,
    ) {}

    async randomByType(type: string, count: number) : Promise<Joke[]> {
        return this.jokesRepository
            .createQueryBuilder("joke")
            .select(['joke.setup', 'joke.punchline', 'type.name'])
            .leftJoin('joke.type', 'type')
            // Filter by type
            .where("type.name = :typeName", { typeName: type })
            // If type is Any, clause will be true for all
            .orWhere("'Any' = :typeName", { typeName: type })
            .orderBy("RAND()")
            .limit(count)
            .getMany();
    }

    async typeExists(type: string) : Promise<boolean> {
        return this.jokeTypesRepository.exist({ where: { name: type } });
    }

    async listTypes() : Promise<JokeType[]> {
        return this.jokeTypesRepository.find();
    }
}
