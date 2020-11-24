import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { GlobalModule } from './global.module'

async function bootstrap() {
  const app = await NestFactory.create(GlobalModule)
  const options = new DocumentBuilder()
    .setTitle('MS-GATEWAY')
    .setDescription('微服务官网的API描述文档')
    .setVersion('0.0.1-canary')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}

bootstrap()
