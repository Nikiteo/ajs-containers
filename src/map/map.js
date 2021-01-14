export default class ErrorRepository {
  constructor() {
    this.errorCodes = new Map();
    this.errorCodes.set(1, 'first error');
    this.errorCodes.set(2, 'second error');
    this.errorCodes.set(3, 'third error');
  }

  translate(code) {
    return this.errorCodes.get(code) || 'Unknown error';
  }
}
