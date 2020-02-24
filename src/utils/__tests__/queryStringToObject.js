import { queryStringToObject } from '../helpers';

describe('queryStringToObject Function', () => {
  it('should return an empty Object', () => {
    expect(queryStringToObject(undefined)).toEqual({})
  })
  it('should return an Object', () => {
    expect(queryStringToObject('?page=1&q=con%20cho%20con')).toEqual({ page: '1', q: 'con cho con'})
  })
})
