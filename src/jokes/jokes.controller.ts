import { Controller, Get, Req, Query } from '@nestjs/common';
import { Request } from 'express';
import { GetJokeParams } from './dto/get-joke.dto.js';
import { JokesService } from './jokes.service';
import { Joke } from './joke/joke';

@Controller('jokes')
export class JokesController {
    constructor(private jokesService: JokesService) {}

    @Get()
    async helloWorld(@Query() query: GetJokeParams): Promise<Joke[]> {
        return this.jokesService.findAll();
    }
}
