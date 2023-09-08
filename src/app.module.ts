import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatsController } from './stats/stats.controller';
import { UserInputController } from './user-input/user-input.controller';

@Module({
  imports: [],
  controllers: [AppController, StatsController, UserInputController],
  providers: [AppService],
})
export class AppModule {}
