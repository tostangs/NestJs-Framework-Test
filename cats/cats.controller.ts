import { Controller, Get, Post, Body, Req, Param } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get('some')
    someCats() {
        return 'This action returns some cats';
    }

    @Get(':name')
    findOne(@Param() params) {
        console.log(params.name);
        return this.catsService.findOne(params.name);
        // return `This action returns a #${id} cat`;
    }
}