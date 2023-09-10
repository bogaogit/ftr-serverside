import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';

describe('PlatformController', () => {
  let controller: PlatformController;
  let service: PlatformService;

  beforeEach(async () => {
    service = new PlatformService();
    controller = new PlatformController(service);
  });

  describe('findAll', () => {
    it('should return an array of count stats data', async () => {
      const timeNow = new Date();
      const result = {
        countStats: [
          {
            inputNumber: 2,
            count: 10,
            userName: 'John',
          },
        ],
        message: 'statistics',
        timestamp: timeNow,
      };
      //@ts-ignore
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll('John')).toBe(result);
    });
  });

  describe('update', () => {
    it('should return an array of count stats data', async () => {
      const timeNow = new Date();
      const inMemoryDbStore = {
        countStats: [
          {
            inputNumber: 2,
            count: 10,
            userName: 'John',
          },
        ],
      };

      const expected = {
        countStats: [
          {
            inputNumber: 2,
            count: 11,
            userName: 'John',
          },
        ],
        message: 'FIB',
        timestamp: timeNow,
      };
      //@ts-ignore
      jest.spyOn(service, 'inMemoryDbStore').mockImplementation(() => inMemoryDbStore);

      expect(await controller.update({ userName: 'John', userInput: 2 })).toBe(expected);
    });
  });
});
