import { queryBuilder } from '../helpers';

describe('queryBuilder Function', () => {
  it('should return an empty string', () => {
    expect(queryBuilder(undefined)).toEqual('')
  })
  it('should return an query string', () => {
    expect(queryBuilder({
      page: 1,
      q: "con cho con"
    })).toEqual(`?page=1&q=con cho con`)
  })
})
