export interface IToken {
  access: string;
  refresh: string;
}

export interface ResponseEntity<T = {}> {
  serviceType: string;
  path: string;
  method: string;
  timestamp: Date;
  data: T;
  token: IToken;
}

export interface IDiary {
  id: number;
  title: string;
  weather: string;
  content: string;
  user: string;
  date: string;
  imageUrls: string[];
  thumbnailIdx: number;
}

export interface IFinance {
  user: string;
  id: number;
  type: string;
  anothername: string;
  description: string;
  colorcode: string;
  version: number;
}

export interface IGoal {
  id: number;
  user: string;
  name: string;
  amount: number;
  state: string;
  start: Date;
  end: Date;
  month: number;
  year: number;
  weekIds: number;
  week: number;
}
