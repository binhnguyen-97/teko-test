import { getDisplayImage } from "../helpers";

test('should return lowest priority image url', () => {
  const fakeData = [
    {
      priority: 2,
      url: 'priority 2'
    },
    {
      priority: 1,
      url: 'priority 1'
    },
    {
      priority: 3,
      url: 'priority 3'
    },
  ];
  expect(getDisplayImage(fakeData)).toEqual('priority 1');
})

test('should return default image url', () => {
  const fakeData = [];
  expect(getDisplayImage(fakeData)).toEqual('https://phongvu.vn/images/default-image.png');
})
