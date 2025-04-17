import * as Comlink from "comlink";

export class Calculator {
  private total: number;

  constructor(initialValue: number = 0) {
    this.total = initialValue;
  }

  add(value: number): void {
    this.total += value;
  }

  subtract(value: number): void {
    this.total -= value;
  }

  getTotal(): number {
    return this.total;
  }
}

const instance = new Calculator();

Comlink.expose(instance);
