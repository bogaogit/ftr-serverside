import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatsController } from './stats/stats.controller';

@Module({
  imports: [],
  controllers: [AppController, StatsController],
  providers: [AppService],
})
export class AppModule {}
