import { formatPrice } from '../helpers';

describe('format Price Function', () => {
  test('should return formated number', () => {
    expect(formatPrice(100000000)).toEqual('100,000,000');
  })
})
