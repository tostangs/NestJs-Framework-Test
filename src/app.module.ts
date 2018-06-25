import { Module } from '@nestjs/common';
import { CatsController } from '../cats/cats.controller';
import { CatsService } from '../cats/cats.service';
import { CatsModule } from '../cats/cat.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
