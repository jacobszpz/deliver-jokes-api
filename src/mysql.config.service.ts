import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class MySQLConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            database: this.configService.get<string>('DB_NAME'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASS'),
            autoLoadEntities: true,
            synchronize: true
        };
    }
}
