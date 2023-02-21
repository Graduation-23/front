// import {Widget} from '@type/widget';

export default class WidgetUtils {
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
      id: 0,
      financeId: 0,
      amount: 0,
      description: '',
      category: '생활',
    };
  }

  static calcItemsTotalCost(items: Widget.ItemType[]): number {
    if (items) {
      return items.reduce((acc, cur) => acc + cur.amount, 0);
    }
    return 0;
  }

  static isItemEmpty(item: Widget.ItemType | null) {
    if (!item) {
      return true;
    }
    // check property expect 'id'
    switch (true) {
      case item.description.trim().length !== 0:
      case item.amount !== 0:
        return false;
    }

    return true;
  }
}
