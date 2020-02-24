import isEmpty from 'lodash.isempty';

export const queryStringToObject = (queryString = '') => {
  let queryObject = {};
  if (!queryString || queryString.trim().length === 0) {
    return queryObject;
  }
  const queryArray = queryString.substr(1).split('&');
  queryArray.map(query => {
    const queryElement = query.split('=');
    return queryObject = {
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
export const sortByPriority = objWithPriority => {
  return objWithPriority.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    if (a.priority < b.priority) return -1;
    return 0;
  });
}
export const getDisplayImage = images => {
  return sortByPriority(images)[0]?.url || 'https://phongvu.vn/images/default-image.png';
}

export const formatPrice = (price = 0) => {
  if(parseInt(price, 10) < 1000) {
    return price.toString();
  }
  return Number(price).toLocaleString();
}

export const getPromotionInfo = (prices) => {
  if (prices?.bestPrice < prices?.finalPrice) {
    return {
      isSale: true,
      percentage: Math.round(100 - ((prices.bestPrice / prices.finalPrice) * 100))
    }
  } else {
    return {
      isSale: false,
      percentage: 0,
    }
  }
};
