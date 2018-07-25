import 'reflect-metadata';
import { Handler, Context, Callback, CloudFrontRequestEvent } from 'aws-lambda';
import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import { Cat } from './entity/cat.entity';

import { NestFactory } from '@nestjs/core';
import { CatModule } from './cat.module';
import { CatController } from './cat.controller';

// explicitly add entities to improve cold start times and avoid webpack issues
function getConnectionOptions(): ConnectionOptions {
    // const process = require('process');
    if (process.env.NODE_ENV !== 'production') {
        console.log('not production');
        require('dotenv').load();
    } else {
        console.log('is production');
        console.log('process.env: ' + JSON.stringify(process.env));
    }

    // For sqlite3
    const connectionSettings: ConnectionOptions = {
        type: 'sqlite',
        database: 'myTestDb.db',
        logging: false,
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    };

    console.log('connection established: ' + JSON.stringify(connectionSettings));
    return connectionSettings;
}

exports.handler = async (event: CloudFrontRequestEvent, context: Context) => {
    const connection: Promise<Connection> = createConnection(getConnectionOptions());
    const app = NestFactory.createApplicationContext(CatModule);

    context.callbackWaitsForEmptyEventLoop = false;
    const myApp = await app;
    const tasksController = myApp.get(CatController);

    let result = {
        statusCode: 200,
        headers: { 'x-custom-header' : 'my custom header value' },
        body: tasksController.root(),
    };
    return result;
}
