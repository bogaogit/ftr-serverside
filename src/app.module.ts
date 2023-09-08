import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatsController } from './stats/stats.controller';
import { UserInputController } from './user-input/user-input.controller';
import { DEFAULT_ROOT_PATH, ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(DEFAULT_ROOT_PATH, '..', 'ftr-clientside'),
    }),
  ],
  controllers: [AppController, StatsController, UserInputController],
  providers: [AppService],
})
export class AppModule {}
