function arrayToObject(array) {
    return array.reduce(function(result, item) {
      return Object.entries(item).reduce((r, [key, value]) => Object.assign(result, {
        [value]: key
      }), result);
    }, {});
  }
  