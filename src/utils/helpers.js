import isEmpty from 'lodash.isempty';

export const queryStringToObject = (queryString = '') => {
  let queryObject = {};
  if (!queryString || queryString.trim().length === 0) {
    return queryObject;
  }
  const queryArray = queryString.substr(1).split('&');
  queryArray.map(query => {
    const queryElement = query.split('=');
    queryObject = {
      ...queryObject,
      [queryElement[0]]: queryElement[1] ? decodeURI(queryElement[1]) : ''
    }
  })
  return queryObject;
}

export const queryBuilder = (queryObject) => {
  let queryArray = [];
  if(isEmpty(queryObject)) {
    return queryArray.join('');
  }
  for(let query in queryObject) {
    queryArray = [...queryArray, `${query}=${queryObject[query]}`]
  }
  return `?${queryArray.join('&')}`
}
