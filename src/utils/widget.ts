// import {Widget} from '@type/widget';
import category from '@/constants/category';
import {ITransaction} from '@type/api';

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

  static groupByCategory<T = Widget.ItemType>(
    items: Widget.ItemType[],
    getter: (item: Widget.ItemType) => T,
  ) {
    return items.reduce((acc, cur) => {
      if (cur.category in acc) {
        acc[cur.category].push(getter(cur));
      } else {
        acc[cur.category] = [getter(cur)];
      }
      return acc;
    }, {} as {[key: string]: T[]});
  }

  static groupByYear(widgets: Widget.Type[]) {
    return widgets.reduce((acc, cur) => {
      const year = cur.date.split('-')[0];

      if (year in acc) {
        acc[year].push(cur);
      } else {
        acc[year] = [cur];
      }

      return acc;
    }, {} as {[key: string]: Widget.Type[]});
  }

  static transactionToWidgetItems(transactions: ITransaction[]) {
    return transactions.map(transaction => {
      return {
        financeId: 0,
        amount: transaction.amount,
        description: transaction.content,
        category:
          category.find(({tag}) => tag === transaction.transactionType)?.tag ||
          '생활',
      };
    });
  }
}
