import { Controller, Get, Req, Query, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { GetJokeParams } from './dto/get-joke.dto.js';
import { JokesService } from './jokes.service';
import { Joke } from './joke/joke';
import { JokeType } from './joke-type/joke-type';

@Controller('jokes')
export class JokesController {
    constructor(private jokesService: JokesService) {}

    @Get()
    async randomByType(@Query() query: GetJokeParams): Promise<Joke[]> {
        // First validate type
        const validType = await this.jokesService.typeExists(query.type);

        if (!validType) {
            throw new HttpException('use a valid joke type', HttpStatus.BAD_REQUEST);
        }
        // Then return results
        return this.jokesService.randomByType(query.type, query.count);
    }

    @Get('types')
    async types(): Promise<JokeType[]> {
        return this.jokesService.listTypes();
    }
}
