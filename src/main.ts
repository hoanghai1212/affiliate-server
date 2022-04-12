import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  //** LOGGER CONFIG */
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  //** PRISMA CONFIG */
  const prismaService = app.get(PrismaService);

  await prismaService.enableShutdownHooks(app);

  /** SWAGGER CONFIG */
  const config = new DocumentBuilder()
    .setTitle('Affilicate API')
    .setDescription('The affilicate API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Affilicate API Docs',
  };

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document, customOptions);

  /** START APP SERVER */
  await app.listen(process.env.PORT || 5000);
}

bootstrap();
