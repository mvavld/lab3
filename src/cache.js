class Cache {
  storage = new Map();

  statisctics = new Array();

  set = (key, value, counter = 1) => {
    this.storage.set(key, [value, counter]);
  };

  get = (key) => {
    let result = this.storage.get(key);
    if (result == undefined) {
      return null;
    } else {
      if (result[1] > 0) {
        result[1]--;
        this.statisctics.push(result);
        return result[0];
      } else {
        return null;
      }
    }
  };

  stats = () => {
    return this.statisctics;
  };

}

export { Cache };
