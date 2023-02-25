export as namespace Widget;

export interface Type {
  id: number;
  userId: string;
  date: string;
  items: ItemType[];
  totalCost: number;
}

export type ItemType = {
  id: number;
  financeId: number;
  amount: number;
  description: string;
  category: string;
};

export type SearchOption =
  | 'last-week'
  | 'last-month'
  | 'all'
  | 'year'
  | 'month';
