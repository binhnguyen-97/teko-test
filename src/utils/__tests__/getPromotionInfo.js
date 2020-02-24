import { getPromotionInfo } from '../helpers';

describe('getPromotionInfo Function', () => {
  test('should return isSale is True and correct percentage', () => {
    expect(getPromotionInfo({ 
      bestPrice: 10000,
      finalPrice: 20000}))
    .toEqual({
      isSale: true,
      percentage: 50
    });
  })
  test('should return isSale is False and 0 percentage', () => {
    expect(getPromotionInfo({ 
      bestPrice: 20000,
      finalPrice: 20000}))
    .toEqual({
      isSale: false,
      percentage: 0
    });
  })
})
