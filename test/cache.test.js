import { Cache } from "../src/cache";

test("getTest1", () => {
  let _cache = new Cache();
  _cache.set("name", "Vlad", 3);
  let result = _cache.get("name");
  expect(result).toBe("Vlad");
});

test("getTest2", () => {
  let _cache = new Cache();
  _cache.set("name", "name", 0);
  let result = _cache.get("name");
  expect(result).toBe(null);
});

test("getTest3", () => {
  let _cache = new Cache();
  _cache.set("name", "Vlad", 1);
  _cache.get("name");
  let result = _cache.get("name");
  expect(result).toBe(null);
});

test("getTest4", () => {
  let _cache = new Cache();
  _cache.set("name", "Vlad");
  let result = _cache.get("name");
  expect(result).toBe("Vlad");
});

test("getTest5", () => {
  let _cache = new Cache();
  _cache.set("name", "Vlad");
  _cache.get("name");
  let result = _cache.get("name");
  expect(result).toBe(null);
});

test("statistics", () => {
  let _cache = new Cache();
  _cache.set("name1", "Vlad1");
  _cache.set("name2", "Vlad2");
  _cache.set("name3", "Vlad3");
  _cache.set("name4", "Vlad4");
  _cache.set("name5", "Vlad5");
  _cache.get("name1");
  _cache.get("name2");
  _cache.get("name3");
  _cache.get("name4");
  _cache.get("name5");
  let result = _cache.statisctics;
  expect(result).toBe([
    ["name1", "Vlad1", 0],
    ["name2", "Vlad2", 0],
    ["name3", "Vlad3", 0],
    ["name4", "Vlad4", 0],
    ["name5", "Vlad5", 0],
  ]);
});
