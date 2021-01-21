test("the data is peanut butter", done => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  function fetchData(callback) {
    setTimeout(() => {
      callback("peanut butter");
    }, 10);
  }
  fetchData(callback);
});

function fetchData() {
  return new Promise((resolve) => {
    resolve("peanut butter");
  })
}

test("the data is peanut butter", () => {
  function fetchData() {
    return new Promise((resolve) => {
      resolve("peanut butter");
    })
  }
  return fetchData().then(data => {
    expect(data).toBe("peanut butter");
  })
});

test("the fetch fails with an error", () => {
  function fetchData() {
    return new Promise((_, reject) => {
      reject("error");
    })
  }
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch("error"));
});

test("the data is peanut butter", () => {
  function fetchData() {
    return new Promise((resolve) => {
      resolve("peanut butter");
    })
  }
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  function fetchData() {
    return new Promise((_, reject) => {
      reject("error");
    })
  }
  return expect(fetchData()).rejects.toMatch("error");
});

test("the data is peanut butter", async () => {
  function fetchData() {
    return new Promise((resolve) => {
      resolve("peanut butter");
    })
  }
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  function fetchData() {
    return new Promise((_, reject) => {
      reject("error");
    })
  }
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  function fetchData() {
    return new Promise((resolve) => {
      resolve("peanut butter");
    })
  }
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  function fetchData() {
    return new Promise(() => {
      throw new Error("error");
    })
  }
  await expect(fetchData()).rejects.toThrow("error");
});
