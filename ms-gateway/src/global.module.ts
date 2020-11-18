import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

const TypeORMImport = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT, 10) || 3306,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.DATABASE,
  entities: ['./data/dao/**/*.entity{.ts,.js}'],
  synchronize: process.env.SYNCHRONIZE == 'true',
})

const ConfigImport = ConfigModule.forRoot({
  envFilePath: '.env',
});

@Module({
  imports: [ConfigImport,TypeORMImport],
  providers: [],
})
export class GlobalModule {}
