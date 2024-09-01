export default class ApiErrors extends Error {
private status:string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error'
  }
}
