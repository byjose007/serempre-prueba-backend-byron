import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Swagger
  const options = new DocumentBuilder()
    .setTitle('Serempre Management')
    .setDescription(' Serempre API description')
    .setVersion('1.0')
    .addTag('Serempre Management')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/documentation', app, document);
  await app.listen(3000);


 
}
bootstrap();