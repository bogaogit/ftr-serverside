import { Test, TestingModule } from '@nestjs/testing';
import { UserInputController } from './user-input.controller';

describe('UserInputController', () => {
  let controller: UserInputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInputController],
    }).compile();

    controller = module.get<UserInputController>(UserInputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
