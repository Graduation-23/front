// import {Widget} from '@type/widget';

export default class WidgetBuilder {
  static emptyWidget(diaryId: number, date: string): Widget.Type {
    return {
      id: diaryId,
      userId: '',
      date,
      totalCost: 0,
      items: [],
    };
  }

  static emptyWidgetItem(): Widget.ItemType {
    return {
      financeId: 0,
      amount: 0,
      description: '',
      category: '',
    };
  }

  static calcItemsTotalCost(items: Widget.ItemType[]): number {
    if (items) {
      return items.reduce((acc, cur) => acc + cur.amount, 0);
    }
    return 0;
  }
}
