import { Controller, Get, Req, Query } from '@nestjs/common';
import { Request } from 'express';
import { GetJokeParams } from './dto/get-joke.dto.js';

@Controller('jokes')
export class JokesController {
    @Get()
    helloWorld(@Query() query: GetJokeParams): any {
        return {
            'msg': `got ${query.count}, ${query.type}`
        };
    }
}
