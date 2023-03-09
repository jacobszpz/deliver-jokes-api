import { Controller, Get, Post, Body, Req, Query, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { GetJokeParams } from './dto/get-joke.dto.js';
import { JokesService } from './jokes.service';
import { Joke } from './joke/joke';
import { JokeType } from './joke-type/joke-type';
import { CreateJokeDto } from './dto/create-joke.dto';

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

    @Post('new')
    async create(@Body() createJokeDto: CreateJokeDto) {
        const jokeInserted = await this.jokesService.create(createJokeDto);

        if (jokeInserted) {
            return {
                statusCode: 200,
                message: 'Operation succeeded'
            };
        }

        return {
            statusCode: 400,
            message: 'The joke could not be inserted'
        };
    }
}
