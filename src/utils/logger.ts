export default class {
  static log(...value: any) {
    console.log(JSON.stringify(value));
  }

  static error(err: any) {
    console.error(JSON.stringify(err));
  }
}
