export interface CountStats {
  inputNumber: number;
  count: number;
  userName: string;
}

export default class InMemoryDbStore {
  public countStats: CountStats[] = [];
}
