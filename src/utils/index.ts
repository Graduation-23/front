import {SignUpDataType} from '@/hooks/useSignUp';
import {IWeekGoal} from '@type/api';

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

    for (const key in pureObject) {
      const item = pureObject[key];

      if (!Array.isArray(item)) {
        form.append(key, item);
      } else {
        item.forEach((el, i) => {
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

  static transformTreeLevel() {
    const date = new Date();
    if (date.getDate() >= 30) {
      return 7;
    } else {
      return Math.ceil(date.getDate() / 5);
    }
  }

  static transformFlowerLevel() {
    const date = new Date();
    if (date.getDay() === 0) {
      return 7;
    } else {
      return date.getDay();
    }
  }

  static transformThisWeek(weeks: IWeekGoal) {
    const [sDay] = this.stringToDate(weeks.start);
    const [eDay] = this.stringToDate(weeks.end);

    const today = new Date();

    return (
      sDay <= today.getDate() && eDay >= today.getDate() && weeks.amount === 0
    );
  }

  //#endregion

  //#region Regex

  static userRegex(user: SignUpDataType): [boolean, boolean, boolean, boolean] {
    const eRegex = this.emailRegex(user.id);
    const pRegex = this.passwordRegex(user.password);
    const nRegex = this.nicknameRegex(user.nickname);
    const confirm = this.confirmPassword(user.password, user.pwForCheck);
    return [eRegex, pRegex, nRegex, confirm];
  }

  static emailRegex(email: string) {
    const regex = /\s/g;
    const removeWhiteSpace = email.replace(regex, '');
    const eRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    console.log('remove : ', eRegex.test(removeWhiteSpace));
    return eRegex.test(removeWhiteSpace);
  }

  static passwordRegex(password: string) {
    const pRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_+=])(?=.*[0-9]).{5,15}$/;
    return pRegex.test(password);
  }

  static nicknameRegex(nickname: string) {
    return nickname.length > 2 && nickname.length < 8;
  }

  static confirmPassword(password: string, passwordCheck: string) {
    return password === passwordCheck;
  }

  //#endregion
}

export default Utils;
