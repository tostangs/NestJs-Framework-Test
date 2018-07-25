import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from '../dto/create-cat.dto';

@Controller()
export class CatController {
    constructor(private readonly catsService: CatService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
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