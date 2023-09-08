
export interface CountStats {
  inputNumber: number;
  count: number;
}

export class ErrorData {
  public error?: string;
}

export default class PlatformDataEntity {
  public countStats: CountStats[] = [];
  public message: string;
  public timestamp: Date;
}
