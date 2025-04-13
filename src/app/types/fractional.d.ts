declare module "fractional" {
  export class Fraction {
    constructor(n: number | string, d?: number);
    add(fraction: Fraction): Fraction;
    subtract(fraction: Fraction): Fraction;
    multiply(fraction: Fraction): Fraction;
    divide(fraction: Fraction): Fraction;
    valueOf(): number;
    toString(): string;
  }
}
