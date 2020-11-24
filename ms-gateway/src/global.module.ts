import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'

import { ControllerModule } from './controller/module'
import { AuthGuard } from './guard/auth.guard'

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
})

const GUARD_Provider = {
  provide: APP_GUARD,
  useClass: AuthGuard,
}

@Module({
  imports: [
    ConfigImport,
    // TypeORMImport,
    ControllerModule,
  ],
  providers: [
    GUARD_Provider
  ]
})
export class GlobalModule {}
