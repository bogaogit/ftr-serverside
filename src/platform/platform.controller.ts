import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseDataEntity } from '../models/InMemoryDbStore';
import { PlatformService } from './platform.service';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Get('/:userName')
  findAll(@Param('userName') userName: string): ResponseDataEntity {
    return this.platformService.findAll(userName);
  }

  @Post()
  update(
    @Body() body: { userName: string; userInput: number },
  ): ResponseDataEntity {
    return this.platformService.update(body);
  }
}
