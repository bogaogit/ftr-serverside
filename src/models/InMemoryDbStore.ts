export interface CountStats {
  inputNumber: number;
  count: number;
  userName: string;
}

export interface ResponseDataEntity {
  countStats: CountStats[];
  message: string;
  timestamp: Date;
}
export interface UpdateStatsRequestData {
  userName: string;
  userInput: number;
}

export default class InMemoryDbStore {
  public countStats: CountStats[] = [];
}
