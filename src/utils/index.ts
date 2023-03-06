class Utils {
  //#region Array
  static removeElementByIndex<T>(array: T[], index: number) {
    const copy = [...array];
    copy.splice(index, 1);
    return copy;
  }

  static updateByIndex<T>(array: T[], index: number, newValue: T): T[] {
    const newArray = [...array];
    newArray.splice(index, 1, newValue);
    return newArray;
  }

  //#endregion Array

  //#region String
  static leftPad(value: number) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }
  //#endregion

  //#region function
  static bindFirstParameter<T extends (...args: any) => any>(
    fn: T,
    firstParameterValue: Parameters<T>[0],
    bindingObject: any = null,
  ) {
    return fn.bind(bindingObject, firstParameterValue);
  }
  //#endregion

  //#region Date
  static formatYMD(date: Date) {
    return this.destructDate(date).join('-');
  }

  static destructDate(date: Date): [string, string, string] {
    const year = date.getFullYear().toString();
    const month = this.leftPad(date.getMonth() + 1).toString();
    const day = this.leftPad(date.getDate()).toString();
    return [year, month, day];
  }

  static stringToDate(date: string): [number, number, number] {
    const yyyymmdd = String(date);
    const year = parseInt(yyyymmdd.substring(0, 4), 10);
    const month = parseInt(yyyymmdd.substring(5, 7), 10);
    const day = parseInt(yyyymmdd.substring(8, 10), 10);
    return [day, month, year];
  }

  static orderBy<T>(
    entry: T[],
    ascending: boolean,
    getYear: (element: T) => string = el => el as any,
  ) {
    return Array.from(entry).sort((lhs, rhs) => {
      let cmp = getYear(lhs).localeCompare(getYear(rhs));
      return ascending ? cmp : -cmp;
    });
  }

  static groupByYear<T>(entry: T[], getYear: (element: T) => string) {
    return entry.reduce((acc, cur) => {
      const year = getYear(cur);

      if (Array.isArray(acc[year])) {
        acc[year].push(cur);
      } else {
        acc[year] = [cur];
      }

      return acc;
    }, {} as {[key: string]: T[]});
  }

  //#endregion

  //#region Form
  static transformObjToForm(pureObject: any) {
    const form = new FormData();

    if (!pureObject || typeof pureObject !== 'object') {
      return form;
    }

    console.log(pureObject);

    for (const key in pureObject) {
      const item = pureObject[key];

      console.log('item', item);

      if (!Array.isArray(item)) {
        form.append(key, item);
      } else {
        item.forEach((el, i) => {
          console.log('el', el);
          form.append(`${key}[${i}]`, el);
        });
      }
    }
    return form;
  }

  static transformFileToMultipart(file: any) {
    return {
      name: file.fileName,
      type: 'multipart/form-data',
      uri: file.uri,
      data: file.data,
    };
  }
  //#endregion

  //#region Calculation

  static transformPercent(numbers: number[]) {
    const total = numbers.reduce((acc, cur) => acc + cur, 0);
    return numbers.map(el => ((el / total) * 100).toFixed(1));
  }

  static trnasformTreeLevel(d: number) {
    if (d >= 30) {
      return 7;
    } else {
      return Math.ceil(d / 5);
    }
  }

  //#endregion
}

export default Utils;
