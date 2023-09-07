import { Controller, Get } from '@nestjs/common';

@Controller('stats')
export class StatsController {
    @Get()
    findAll(): string {
        return 'This action returns all stats';
    }
}
