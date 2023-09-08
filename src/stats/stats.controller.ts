import { Controller, Get } from '@nestjs/common';
import PlatformDataEntity from '../models/PlatformDataEntity';

@Controller('stats')
export class StatsController {
  @Get()
  findAll(): PlatformDataEntity {
    return {
      countStats: [
        {
          count: 1,
          inputNumber: Math.random(),
        },
      ],
    };
  }
}
