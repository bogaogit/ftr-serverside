import { Body, Controller, Post } from '@nestjs/common';
import PlatformDataEntity from '../models/PlatformDataEntity';

@Controller('user-input')
export class UserInputController {
  @Post()
  update(@Body() body: { userInput: string }): PlatformDataEntity {
    return {
      countStats: [
        {
          count: parseInt(body.userInput),
          inputNumber: Math.random(),
        },
      ],
    };
  }
}
