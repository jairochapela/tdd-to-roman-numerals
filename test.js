import { toRoman } from './index';
import { strictEqual } from "assert";

describe(('Conversión a números romanos'), () => {
  it('test 1', () => { strictEqual(toRoman(1), "I") });
  it('test 2', () => { strictEqual(toRoman(2), "II") });
  it('test 3', () => { strictEqual(toRoman(3), "III") });
  it('test 4', () => { strictEqual(toRoman(4), "IV") });
  it('test 5', () => { strictEqual(toRoman(5), "V") });
  it('test 7', () => { strictEqual(toRoman(7), "VII") });
  it('test 9', () => { strictEqual(toRoman(9), "IX") });
})