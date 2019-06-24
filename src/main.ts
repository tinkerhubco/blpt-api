import { NestFactory, Reflector } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import * as morgan from 'morgan';

require('dotenv').config();

import { AppModule } from './app.module';
import ConfigUtil from './shared/utils/config.util';
import { RolesGuard } from './core/guards/roles.guard';
import { MeInterceptor } from './core/interceptors/me.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = ConfigUtil.get('api.port');

  configureApp(app);

  await app.listen(port);
}

export function configureApp(app: INestApplication) {
  app.setGlobalPrefix(ConfigUtil.get('api.prefix'));
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new RolesGuard(reflector));
  app.useGlobalInterceptors(new MeInterceptor());
  app.use(morgan('dev'));
}

bootstrap();
