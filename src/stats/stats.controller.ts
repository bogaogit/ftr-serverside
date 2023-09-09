import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import PlatformDataEntity, { CountStats } from '../models/PlatformDataEntity';

@Controller('stats')
export class StatsController {
  platformData: PlatformDataEntity = {
    countStats: [],
    message: undefined,
    timestamp: undefined,
  };

  fibonacciNumbers: number[] = [];

  fibonacciNumber(n) {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return this.fibonacciNumber(n - 2) + this.fibonacciNumber(n - 1);
    }
  }

  generateFibonacciSequence() {
    this.fibonacciNumbers = [];

    const n = 10;
    for (let i = 0; i < n; i++) {
      this.fibonacciNumbers.push(this.fibonacciNumber(i));
    }
  }

  constructor() {
    this.generateFibonacciSequence();
  }

  @Get('/:userName')
  findAll(@Param('userName') userName: string): PlatformDataEntity {
    let message = '';
    const countStats = this.platformData.countStats.filter(e => e.userName === userName)
    const messageItems = countStats.map((countStat) => {
      return `${countStat.inputNumber}:${countStat.count}`;
    });

    message = messageItems.join(', ');

    return {
      countStats: countStats,
      message: message,
      timestamp: new Date(),
    };
  }

  @Post()
  update(@Body() body: { userName: string; userInput: number }): {
    countStats: CountStats[];
    message: string;
    timestamp: Date;
  } {
    const userInput = body.userInput;
    const constStats = this.platformData.countStats.find(
      (e: CountStats) =>
        e.inputNumber === userInput && e.userName === body.userName,
    );
    if (constStats) {
      constStats.count++;
    } else {
      this.platformData.countStats.push({
        inputNumber: userInput,
        count: 1,
        userName: body.userName,
      });
    }

    this.platformData.countStats.sort((a, b) => b.count - a.count);
    let message = '';

    if (this.fibonacciNumbers.indexOf(userInput) >= 0) {
      message = 'FIB';
    }

    return {
      countStats: this.platformData.countStats,
      message: message,
      timestamp: new Date(),
    };
  }
}
