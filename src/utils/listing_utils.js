export const getDisplayImage = images => {
  images.sort((a, b) => {
    if (a.priority > b.priority) return -1;
    if (a.priority < b.priority) return 1;
    return 0;
  });
  return images[0]?.url || 'https://phongvu.vn/images/default-image.png';
}

export const formatPrice = (price = 0) => {
  if(parseInt(price, 10) < 1000) {
    return price.toString();
  }
  return Number(price).toLocaleString();
}
