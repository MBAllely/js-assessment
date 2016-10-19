exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let total = arr.reduce(function(sum, index){
      return sum + index;
    }, 0);
    return total;
  },

  remove: function(arr, item) {
    let filtered = arr.filter(function(i) {
      return i !== item;
    });

    return filtered;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = 0;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    let newarr = [];

    arr1.forEach(i => newarr.push(i))
    arr2.forEach(i => newarr.push(i))

    return newarr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count ++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (newarr.includes(arr[i])) {
          break;
        }
        newarr.push(arr[i]);
      }
    }
  }
    return newarr;
  },

  square: function(arr) {
    const newarr = arr.map(function(i) {
      return i * i;
    })

    return newarr;
  },

  findAllOccurrences: function(arr, target) {
    let occurrences = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }

    return occurrences;
  }
};
