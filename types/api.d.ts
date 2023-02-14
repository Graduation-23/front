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
  thumbnailIdx: string;
}
