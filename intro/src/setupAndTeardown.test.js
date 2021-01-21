let cities = null;
let food = false;

const initializeCityDatabase = () => {
  cities.push("Viena", "San Juan");
}

const clearCityDatabase = () => {
  cities.length = 0;
}

const isCity = (city) => {
  return cities.includes(city);
}

const initializeFoodDatabase = () => {
  food = true;
}

const isValidCityFoodPair = () => {
  return food;
}

beforeAll(() => {
  cities = [];
});

afterAll(() => {
  cities = null;
})

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Viena")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  beforeEach(() => {
    return initializeFoodDatabase();
  });
  
  test("Vienna <3 sausage", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});
