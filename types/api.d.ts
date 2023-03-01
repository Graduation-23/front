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

export interface IGoal {}

export interface IMonthGoal {
  amount: number;
  id: number;
  month: number;
  name: string;
  state: string;
  user: string;
  weekIds: [];
  year: number;
  week: number;
}

export interface IWeekGoal {
  amount: number;
  goalMonth: number;
  id: number;
  name: string;
  state: string;
  week: number;
}

export interface IAchieve {
  id: number;
  user_id: string;
  achieve_title: string;
  month_achieve: number;
  week_achieve: number;
}
