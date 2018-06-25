import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Array<Cat> = [
        {
            name: 'Kitty',
            age: 12,
            breed: 'No idea',
        },
        {
            name: 'Dog',
            age: 10,
            breed: 'No idea',
        },
    ];

    create(cat: Cat) {
        console.log('Creating');
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        console.log('Finding all');
        return this.cats;
    }

    findOne(name: string): Cat|string {
        console.log('searching ' + name);
        let cat: Cat;
        for (cat of this.cats) {
            if (cat.name === name) {
                return cat;
            }
        }
    }
}