import { Module } from '@nestjs/common';
import { CatsModule } from '../cats/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'NestJsAndTimeDb',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    })],
})
export class AppModule {}
