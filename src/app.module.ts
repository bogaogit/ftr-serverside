import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatformController } from './platform/platform.controller';
import { DEFAULT_ROOT_PATH, ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PlatformService } from './platform/platform.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(DEFAULT_ROOT_PATH, '..', 'ftr-clientside'),
    }),
  ],
  controllers: [AppController, PlatformController],
  providers: [AppService, PlatformService],
})
export class AppModule {}
