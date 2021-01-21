test("test mocks", () => {
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);
  
  expect(mockCallback.mock.calls.length).toBe(2);
  
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  
  expect(mockCallback.mock.results[0].value).toBe(42);
});

const filterTestFn = jest.fn();

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
console.log(filterTestFn.mock.calls[0][0]);
console.log(filterTestFn.mock.calls[0][1]);

const axios = require("axios");
const Users = require("./users");

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual(users));
});
